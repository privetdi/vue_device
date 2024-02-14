export interface IDevice {
    id: number;
    uuid: string;
    type: string;
    name: string;
    version: string;
    install: string;
    created_at: string;
    updated_at: string;
    count_requests: number | null;
}

export interface IDataDevice {
    id: number;
    device_id: number;
    project_id: number;
    session: string;
    method: string;
    url: string;
    number: string;
    path: string;
    headers_request: string;
    headers_response: string;
    status: string;
    status_code: string;
    payload: string;
    response: string;
    curl: string;
    from_action: string;
    created_at: string;
    responses_at: string;
    project: {
        id: number;
        name: string;
        base_url: string;
        type: string;
        created_at: string;
        updated_at: string;
    };
}

export interface IDeviceRequest {
    id: string;
    requests: IDataDevice[];
}

export interface ILog {
    id: number;
    device_id: number;
    project_id: number;
    session: string;
    message: string;
    created_at: string;
    updated_at: string;
}

export interface ILogResponse {
    logs: ILog[];
}
