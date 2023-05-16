import {Entity, model, property, belongsTo} from '@loopback/repository';
import {TodoList} from './todo-list.model';

@model()
export class TodoListImage extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  value: string;

  @belongsTo(() => TodoList)
  todoListId: number;

  constructor(data?: Partial<TodoListImage>) {
    super(data);
  }
}

export interface TodoListImageRelations {
  // describe navigational properties here
}

export type TodoListImageWithRelations = TodoListImage & TodoListImageRelations;
