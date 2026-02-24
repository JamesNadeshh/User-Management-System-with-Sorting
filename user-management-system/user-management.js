
const UserManagement = {
    /**
     * Data structure to store users
     * @type {Array<{id: number, name: string, occupation: string}>}
     */
    users: [],

    /**
     * Tracks the next available ID
     * @type {number}
     */
    nextID: 1,

    init: function() {
        this.loadFromLocalStorage();
        this.updateUserIDInput();
        this.renderUsers();
    },


    loadFromLocalStorage: function() {
        try {
            const storedData = localStorage.getItem('userManagementData');
            if (storedData) {
                const { users, nextID } = JSON.parse(storedData);
                this.users = users || [];
                this.nextID = nextID || 1;
            }
        } catch (error) {
            console.error('Error loading data from localStorage:', error);
            // Reset if there's an error
            this.users = [];
            this.nextID = 1;
        }
    },


    saveToLocalStorage: function() {
        try {
            const data = {
                users: this.users,
                nextID: this.nextID
            };
            localStorage.setItem('userManagementData', JSON.stringify(data));
        } catch (error) {
            console.error('Error saving data to localStorage:', error);
        }
    },


    updateUserIDInput: function() {
        $('#userId').val(this.nextID);
    },

    /**
     * Adds a new user to the data structure
     * @param {string} userName - User's name
     * @param {string} userOccupation - User's occupation
     * @returns {boolean} - Success status
     */
    addUser: function(userName, userOccupation) {
        // Basic validation
        if (!userName.trim() || !userOccupation.trim()) {
            alert('Please fill in both Name and Occupation fields');
            return false;
        }

        // Create new user object
        const newUser = {
            id: this.nextID,
            name: userName.trim(),
            occupation: userOccupation.trim()
        };

        // Add to users array
        this.users.push(newUser);

        // Increment next ID
        this.nextID++;

        // Save to localStorage
        this.saveToLocalStorage();

        // Update UI
        this.updateUserIDInput();
        this.renderUsers();

        // Clear input fields
        $('#userName, #userOccupation').val('');

        // Sort and render with current sort criteria
        const currentSort = $('#sortDropdown').val();
        this.sortAndRender(currentSort);

        return true;
    },

    /**
     * Sorts users by specified field
     * @param {string} by - Field to sort by ('id', 'name', or 'occupation')
     */
    sortUsers: function(by) {
        // Use a stable sort algorithm (Array.sort() is stable in modern browsers)
        this.users.sort((a, b) => {
            // Handle numeric sorting for ID
            if (by === 'id') {
                return a.id - b.id;
            }

            // Handle string sorting for name and occupation
            const aVal = a[by].toLowerCase();
            const bVal = b[by].toLowerCase();

            if (aVal < bVal) return -1;
            if (aVal > bVal) return 1;
            return 0;
        });
    },

    /**
     * Sorts and renders users in the table
     * @param {string} by - Field to sort by
     */
    sortAndRender: function(by) {
        this.sortUsers(by);
        this.renderUsers();
    },

    renderUsers: function() {
        const tbody = $('#usersTable tbody');
        const emptyState = $('#emptyState');

        // Clear existing content
        tbody.empty();

        // Check if there are users
        if (this.users.length === 0) {
            emptyState.show();
            return;
        }

        emptyState.hide();

        // Render each user
        this.users.forEach(user => {
            const row = `
                <tr>
                    <td style="padding: 8px;">${user.id}</td>
                    <td style="padding: 8px;">${user.name}</td>
                    <td style="padding: 8px;">${user.occupation}</td>
                </tr>
            `;
            tbody.append(row);
        });
    }
};



// Initialize when DOM is ready
$(document).ready(function() {
    // Initialize the user management system
    UserManagement.init();

    // Set up event listeners
    setupEventListeners();
});


function setupEventListeners() {
    // Add button click event
    $(document).on('click', '#addButton', function() {
        const userName = $('#userName').val();
        const userOccupation = $('#userOccupation').val();
        UserManagement.addUser(userName, userOccupation);
    });

    // Sort dropdown change event
    $(document).on('change', '#sortDropdown', function() {
        const sortBy = $('#sortDropdown').val();
        UserManagement.sortAndRender(sortBy);
    });

    // Form submission prevention
    $('form').on('submit', function(e) {
        e.preventDefault();
    });
}