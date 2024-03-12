export interface Widget {
    _id?: string,
    elementHtml: string;
    Global: {
        Name: string;
        Model: string;
        ID: string;
    };
    Validation: object;
    Style: object;
    Rules: object;
    Columns: object;
    DataSource: object;
}

export interface Interface {
    _id: string;
    name: string;
    widget: Widget[];
}

export interface Project {
    _id: string;
    name: string;
    description: string;
    interface?: Interface[];
    createdBy?: string;
    createdAt?: string;
    updatedAt?: string;
    showOptions?: boolean;
}