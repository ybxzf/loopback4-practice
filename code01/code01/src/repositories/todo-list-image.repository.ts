import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {TodoList, TodoListImage, TodoListImageRelations} from '../models';

export class TodoListImageRepository extends DefaultCrudRepository<
  TodoListImage,
  typeof TodoListImage.prototype.id,
  TodoListImageRelations
> {
  // todoList(id: number | undefined): import("../models").TodoList | PromiseLike<import("../models").TodoList> {
  //   const list = this.find()
  //   return list
  //   throw new Error('Method not implemented.');
  // }
  
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(TodoListImage, dataSource);
  }
}
