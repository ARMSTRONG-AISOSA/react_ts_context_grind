
export interface ContextFeature {
    id: number;
    title: string;
    path: string;
    description: string;
}

export const contextFeatures: ContextFeature[] = [
    {
        id: 1,
        title: "Box Bg Toggle",
        path: "/boxswitch",
        description: "Switching between different box colors using Context."
    },
    {
        id: 2,
        title: "Icon Toggle",
        path: "/iconswitch",
        description: "Switching between different icon using Context"
    },
    {
        id: 3,
        title: "User Management",
        path: "/boxswitch",
        description: "Add, update, and delete users globally with Context API."
    },
]