import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import { repository } from '@loopback/repository';
import { TodoListImageRepository } from '../repositories';


@injectable({scope: BindingScope.TRANSIENT})
export class TodoListService {
  constructor(/* Add @inject to inject parameters */
  @repository(TodoListImageRepository)
  public todoListImageRepository : TodoListImageRepository,
  ) {}

  /*
   * Add service methods here
   */
  async todoList(id: number | undefined) {
    const list = await this.todoListImageRepository.findById(id)
    return list
    throw new Error('Method not implemented.');
  }
}
