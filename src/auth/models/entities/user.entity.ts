import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { RoleUserMethod } from '../classes/';

@Entity({ name: 'User' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text', nullable: false, unique: true })
  email: string;

  @Column({ type: 'text', nullable: false, select: false })
  password: string;
  @Column({ type: 'text', nullable: false })
  fullname: string;

  @Column({ type: 'bool', nullable: true, default: true })
  isActive: boolean;

  @Column({ type: 'json', default: ['user'] })
  roles: RoleUserMethod[];

  @BeforeInsert()
  checkFileBeforeInsert() {
    this.email = this.email.toLocaleLowerCase().trim();
  }

  @BeforeUpdate()
  checkFileBeforeUpdate() {
    this.checkFileBeforeInsert();
  }
}
