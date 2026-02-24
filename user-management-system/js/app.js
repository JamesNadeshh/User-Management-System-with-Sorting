
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