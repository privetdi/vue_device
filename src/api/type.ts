export default interface IDevice {
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
