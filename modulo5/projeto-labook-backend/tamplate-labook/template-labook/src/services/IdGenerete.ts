import { v4 } from "uuid"

export class IdGenerete {

  generateId = (): string => v4()
}