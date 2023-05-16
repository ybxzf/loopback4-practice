import {injectable, /* inject, */ BindingScope, inject} from '@loopback/core';
import { repository } from '@loopback/repository';
import result from '../config/result';
import { PostgresDataSource } from '../datasources';
import { UserRepository } from '../repositories';

@injectable({scope: BindingScope.TRANSIENT})
export class UserService {
  constructor(/* Add @inject to inject parameters */
    @repository(UserRepository)
    public userRepository: UserRepository,
    @inject('datasources.postgres')
      public pgdbDataSource: PostgresDataSource,
  ) {}

  /*
   * Add service methods here
   */
  async findSubById(id:number){
    var res = new result()
    try {
      const sql = `select u.id ,u."name" ,u.age ,p.subject 
                  from mister."user" u 
                  left join mister.project p 
                  on u.id = p.uid 
                  where u.id = ${id};`
      var data = await this.pgdbDataSource.execute(sql);
      await res.SUCCESSNEEDDATA(data,'successful');
      console.log('结果:',data);
      console.log("res:",res);
    } catch (err) {
      console.log('err',err);
      await res.ERROR(data);
    }finally{
      return res
    }
  }

}
