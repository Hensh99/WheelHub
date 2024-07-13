import { report } from 'process';
import { Report } from '../reports/report.entity';
import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Report, (report) => report.user)
  reports: Report[];

  @AfterInsert()
  logInsert() {
    console.log('Inserted user with Id', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Updated user with Id', this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('Remove user with Id', this.id);
  }
}
