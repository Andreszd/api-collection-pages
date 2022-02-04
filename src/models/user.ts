import { Model, Optional, DataTypes } from 'sequelize';
import { getDefaultModelBaseOpt } from './modelBase';

interface UserAttributes {
  id: number;
  userName: string;
  firstName: string;
  lastName: string;
  password: string;
  urlImg?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'urlImg'> {}

class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  public id!: number;
  public userName!: string;
  public firstName!: string;
  public lastName!: string;
  public password!: string;
  public urlImg!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

const initAttr = {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  userName: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  urlImg: {
    type: DataTypes.STRING,
    allowNull: true,
  },
};

User.init(initAttr, getDefaultModelBaseOpt());

export default User;
