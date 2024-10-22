cd nomad
npm install
npm run dev


##projec structure##

nomad/
├── node_modules/                # Contains all npm packages installed for the project
├── public/                      # Static files that will be served directly
│   ├── vite.svg                 # SVG logo file used in the app
├── src/                         # Source files for the React application
│   ├── components/              # Reusable components used throughout the app
│   │   ├── Login.jsx            # Login component for user authentication
│   │   ├── Register.jsx         # Registration component for new users
│   ├── pages/                   # Different pages for routing (if applicable)
│   ├── App.jsx                  # Main application component
│   ├── index.css                # Global styles for the app
│   ├── main.jsx                 # Entry point of the React application
├── .gitignore                   # Specifies files and directories to ignore in version control
├── api.js                       # API calls and configurations for interacting with the FastAPI backend
├── eslint.config.js             # Configuration file for ESLint (JavaScript linter)
├── index.html                   # Main HTML file that serves the React app
├── package-lock.json            # Automatically generated for any operations where npm modifies the node_modules directory
├── package.json                 # Lists project metadata and dependencies for npm
├── postcss.config.js            # Configuration file for PostCSS
├── README.md                    # Documentation for the project
├── requirements.txt             # Lists Python dependencies for the FastAPI backend
├── tailwind.config.js           # Configuration file for Tailwind CSS
└── vite.config.js               # Configuration file for Vite, the build tool for the project
