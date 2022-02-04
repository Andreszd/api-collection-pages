import { DataTypes, Model, Optional } from 'sequelize';
import { getDefaultModelBaseOpt, ModelBase } from './modelBase';

interface GroupAttributes extends ModelBase {
  name: string;
}

interface GroupCreationAttr extends Optional<GroupAttributes, 'name'> {}

class Group
  extends Model<GroupAttributes, GroupCreationAttr>
  implements GroupAttributes
{
  id!: number;
  name!: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

const initAttr = {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: new DataTypes.STRING(128),
  },
};

Group.init(initAttr, getDefaultModelBaseOpt());

export default Group;
