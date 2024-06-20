// homepage interface declaration
interface settings {
    readonly theme: boolean;
    font: string;
}

// article page interface reopening

interface settings {
    sidebar: boolean;
}

// contact page interface reopening

interface settings {
    external: boolean;
}

// create an object "userSettings" that adheres to the merged "Settings" interface

let userSettings: settings = {
    theme: true,
    font: "open Sans",
    sidebar: false,
    external: true,
};