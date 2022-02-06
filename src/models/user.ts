import {
  Model,
  Optional,
  DataTypes,
  HasManyGetAssociationsMixin,
  Association,
} from 'sequelize';

import { ModelBase, getDefaultModelBaseOpt } from './modelBase';
import Group from './group';
import Page from './page';
import { encryptPasswd } from '../helpers/encryptPasswd';

interface UserAttributes extends ModelBase {
  userName: string;
  firstName: string;
  lastName: string;
  password: string;
  urlImg?: string;
}

interface UserCreationAttributes
  extends Optional<UserAttributes, 'id' | 'urlImg'> {}

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

  public getGroups!: HasManyGetAssociationsMixin<Group>;
  public getPages!: HasManyGetAssociationsMixin<Page>;

  readonly groups?: Group[];
  readonly pages?: Page[];

  static associations: {
    groups: Association<User, Group>;
    pages: Association<User, Page>;
  };
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

User.beforeCreate(async (user, _) => {
  const hashedPasswd = encryptPasswd(user.password);
  user.password = hashedPasswd;
});

User.init(initAttr, getDefaultModelBaseOpt());

User.hasMany(Group, {
  sourceKey: 'id',
  foreignKey: 'ownerId',
  as: 'groups',
});

User.hasMany(Page, {
  sourceKey: 'id',
  foreignKey: 'ownerIdUser',
  as: 'pages',
});

export default User;
