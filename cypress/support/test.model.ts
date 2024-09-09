export interface TestModel {
    general: {
        visit: string;
        title: string;
        login?: string[];
    };
    episodes: FuncName[][];
}

export interface FuncName {
    title?: string;                                     // It(title)
    multi_click?: string[];                             // Array of selectors to be clicked
    multi_input?: { [key: string]: string };            // Key-value pairs for input fields
    multi_select?: { [key: string]: string };           // Key-value pairs for select fields
    type_and_select?: { [key: string]: string };        // Key-value pairs for type and select fields
    check_contains?: { [key: string]: string };         // Key-value pairs for checking text presence
    check_table_data?: { [key: string]: string };       // Key-value pairs for checking table data
    find_and_click_all?: { [key: string]: string[] };   // Key is a selector, value is an array of items to click
    find_hover_click?: { [key: string]: string[] };     // Key is a selector, value is an array of items to hover and click
    first_click?: string[];                             // Array of selectors for first click actions
    check_in_modal?: { [key: string]: string[] };       // Key is a selector, value is an array of items to check in modal
    clear_and_type?: { [key: string]: string };         // Key-value pairs for clear and type actions
    wait?: string;                                      // Wait time in seconds
    check_required?: string[];                         // Array of required fields
    log?: string;                                       // Selector for logout
    scrollTo?: {}                                       // Selector for scrolling
    enable_disable?: { [key: string]: string };         // Key-value pairs for enabling/disabling fields
}
