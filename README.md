# React Team Directory

A responsive Team Directory application built with React, JSX, JavaScript, and Tailwind CSS. The project demonstrates reusable components, component composition, props, callback functions, and rendering data from an array of objects.

## Features

- Display team members using reusable profile cards.
- Show each member's name, role, city, and skills.
- Display availability status using different badges.
- Show total members, available members, and busy members.
- Handle missing optional information with default values.
- Display a friendly message when the team list is empty.
- Use a **View Profile** button to select a member.
- Log the selected member in the browser console.
- Use object spread syntax to create an updated member object without modifying the original.

## Technologies Used

- React
- JavaScript (ES6+)
- JSX
- Tailwind CSS
- Vite

## Project Structure

```text
src/
├── components/
│   ├── MemberCard.jsx
│   ├── MemberGrid.jsx
│   ├── Panel.jsx
│   └── StatusBadge.jsx
├── data/
│   └── team.js
├── TeamDirectory.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Component Structure

The application follows this component hierarchy:

```text
App
└── TeamDirectory
    └── Panel
        └── MemberGrid
            └── MemberCard
                └── StatusBadge
```

### Component Responsibilities

- **App:** Main application component.
- **TeamDirectory:** Manages the team data and displays team statistics.
- **Panel:** Reusable wrapper component that accepts children.
- **MemberGrid:** Receives the members array and renders individual member cards.
- **MemberCard:** Displays one member's information and profile button.
- **StatusBadge:** Displays whether a member is available or busy.

## Props and Data Flow

The project demonstrates parent-to-child data flow using props.

1. `TeamDirectory` imports the team members array.
2. `TeamDirectory` passes the array to `MemberGrid`.
3. `MemberGrid` uses `.map()` to render each member.
4. Each `MemberCard` receives one member object.
5. `MemberCard` passes the member's availability value to `StatusBadge`.

The profile selection callback is also passed through components so that clicking a button reports the selected member to the parent component.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/rithairagena13-spec/components-and-props.git
```

### 2. Open the project folder

```bash
cd components-and-props
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

## Learning Objectives

This project helped demonstrate practical understanding of:

- Creating and organizing reusable React components.
- Passing and destructuring props.
- Rendering lists with `.map()` and unique keys.
- Passing callback functions between components.
- Using default values for optional props.
- Passing children through component composition.
- Using object spread syntax.
- Calculating statistics from arrays without mutating the original data.
- Handling empty lists and missing information.

## GitHub Repository

[React Team Directory – GitHub](https://github.com/rithairagena13-spec/components-and-props)

---

**Built as part of React learning and practice.**