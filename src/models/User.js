import Sequelize, { Model } from 'sequelize';
import 'dotenv';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';

class User extends Model {
  static init(connection) {
    super.init(
      {
        id: {
          type: Sequelize.STRING,
          primaryKey: true
        },
        email: {
          type: Sequelize.STRING
        },
        name: {
          type: Sequelize.STRING,
          allowNull: true
        },
        username: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
        },
        email_confirmation: {
          type: Sequelize.BOOLEAN,
          defaultValue: false
        },
        email_confirmation_token: {
          type: Sequelize.STRING
        },
        password: {
          type: Sequelize.VIRTUAL
        },
        password_hash: {
          type: Sequelize.STRING
        }
      },
      {
        sequelize: connection
      }
    );

    this.addHook('beforeCreate', user => {
      // eslint-disable-next-line no-param-reassign
      user.id = uuidv4();
      // eslint-disable-next-line no-param-reassign
      user.email_confirmation_token = uuidv4();
    });

    this.addHook('beforeSave', async user => {
      if (user.password) {
        // eslint-disable-next-line no-param-reassign
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }

  async verifyPassword(password) {
    const verified = await bcrypt.compare(password, this.password_hash);
    return verified;
  }

  getConfirmationMailUrl() {
    // return `${baseUrl}/user/auth/confirm-mail/${encodeURIComponent(

    const host = process.env.HOST_URL || 'http://localhost';
    const port = process.env.PORT || '3000';
    return `${host}:${port}/confirm-email/${this.id}`;
  }
}

export default User;
