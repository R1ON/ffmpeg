export type Env = {
    WIDTH: string;
    HEIGHT: string;
    FINAL_NAME: string;
};

export type Parser =
    | typeof Number
    | typeof String
    | typeof Boolean;
