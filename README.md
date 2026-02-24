# User Management System

A clean, browser-based application for managing user records with automatic ID generation and flexible sorting capabilities.

## Features

- **Automatic UserID Generation**: Unique IDs starting from 1 that increment with each new user
- **Data Persistence**: User records stored in browser localStorage (survives page refreshes)
- **Flexible Sorting**: Sort users by ID, name, or occupation with a single click
- **Responsive Design**: Works well on desktop and mobile devices
- **Simple Interface**: Intuitive form for adding new users

## Quick Start Guide

1. Create the project structure with these files:
   - `index.html` (main application)
   - `user-management.js` (application logic)

2. Open `index.html` in IntelliJ IDEA:
   - Right-click on the file
   - Select "Open in" → "Browser"
   - *Important: Must run via localhost (not file://) for localStorage to work*

3. Begin using the application:
   - Enter a user name and occupation
   - Click "Add" to save the record
   - Use the dropdown to sort by different criteria

## Usage Examples

### Sorting by UserID
![Sort by UserID](https://github.com/user-attachments/assets/9dbb5de0-b249-40be-a7dd-397debd79c88)

### Sorting by UserName
![Sort by UserName](https://github.com/user-attachments/assets/a5cd6aec-b01f-4064-9ec9-ba89d05cc07f)

### Sorting by UserOccupation
![Sort by UserOccupation](https://github.com/user-attachments/assets/91f60016-cab1-47e9-b9a7-028c5a6a5429)

## Technical Details

- **Implementation**: Pure JavaScript with jQuery for DOM manipulation
- **Data Storage**: Browser localStorage for persistent data
- **Architecture**: Modular design with clear separation of concerns
- **No Dependencies**: Requires only jQuery (loaded via CDN)

*Note: All user data is stored locally in your browser and will persist between sessions.*
