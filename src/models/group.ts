import {
  DataTypes,
  Model,
  Optional,
  HasManyGetAssociationsMixin,
  Association,
} from 'sequelize';
import { getDefaultModelBaseOpt, ModelBase } from './modelBase';
import Page from './page';

interface GroupAttributes extends ModelBase {
  ownerId: number;
  name: string;
}

interface GroupCreationAttr extends Optional<GroupAttributes, 'name'> {}

class Group
  extends Model<GroupAttributes, GroupCreationAttr>
  implements GroupAttributes
{
  id!: number;
  ownerId!: number;
  name!: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;

  public getPages!: HasManyGetAssociationsMixin<Page>;

  readonly pages?: Page[];

  static associations: {
    pages: Association<Group, Page>;
  };
}

const initAttr = {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  ownerId: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
};

Group.init(initAttr, getDefaultModelBaseOpt());

Group.hasMany(Page, {
  sourceKey: 'id',
  foreignKey: 'ownerIdGroup',
  as: 'pages',
});

export default Group;
