import { Optional, Model, DataTypes } from 'sequelize';
import { getDefaultModelBaseOpt, ModelBase } from './modelBase';

export interface PageAttributes extends ModelBase {
  ownerIdGroup?: number;
  ownerIdUser: number;
  url: string;
  isFav: boolean;
  isChecked: boolean;
  title?: string;
  description?: string;
}

interface PageCreationAttributes
  extends Optional<
    PageAttributes,
    'id' | 'description' | 'title' | 'ownerIdGroup'
  > {}

class Page
  extends Model<PageAttributes, PageCreationAttributes>
  implements PageAttributes
{
  id!: number;
  ownerIdUser!: number;
  ownerIdGroup?: number;
  url!: string;
  isFav!: boolean;
  isChecked!: boolean;
  title?: string;
  description?: string;
  readonly createdAt?: Date;
  readonly pdatedAt?: Date;
  readonly eletedAt?: Date;
}

const initAttr = {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  ownerIdUser: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  ownerIdGroup: {
    type: DataTypes.INTEGER.UNSIGNED,
  },
  url: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  isFav: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  isChecked: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  title: {
    type: new DataTypes.STRING(128),
  },
  description: {
    type: new DataTypes.STRING(128),
  },
};

Page.init(initAttr, getDefaultModelBaseOpt());

export default Page;
