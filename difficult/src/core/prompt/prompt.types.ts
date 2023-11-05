export type Env = {
    WIDTH: string;
    HEIGHT: string;
    PATH_TO_SOURCE: string;
    FINAL_NAME: string;
};

export type Parser =
    | typeof Number
    | typeof String
    | typeof Boolean;
