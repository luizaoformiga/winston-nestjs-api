export interface ActionLogger {
  user_id: string;
  action: string;
  entity_id: string;
  timestamp: Date;
  status: boolean;
}
