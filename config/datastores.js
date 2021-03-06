/**
 * Datastores
 * (sails.config.datastores)
 *
 * A set of datastore configurations which tell Sails where to fetch or save
 * data when you execute built-in model methods like `.find()` and `.create()`.
 *
 *  > This file is mainly useful for configuring your development database,
 *  > as well as any additional one-off databases used by individual models.
 *  > Ready to go live?  Head towards `config/env/production.js`.
 *
 * For more information on configuring datastores, check out:
 * https://sailsjs.com/config/datastores
 */

module.exports.datastores = {
    /***************************************************************************
     *                                                                          *
     * Your app's default datastore.                                            *
     *                                                                          *
     * Sails apps read and write to local disk by default, using a built-in     *
     * database adapter called `sails-disk`.  This feature is purely for        *
     * convenience during development; since `sails-disk` is not designed for   *
     * use in a production environment.                                         *
     *                                                                          *
     * To use a different db _in development_, follow the directions below.     *
     * Otherwise, just leave the default datastore as-is, with no `adapter`.    *
     *                                                                          *
     * (For production configuration, see `config/env/production.js`.)          *
     *                                                                          *
     ***************************************************************************/

    default: {
        /***************************************************************************
         *                                                                          *
         * Want to use a different database during development?                     *
         *                                                                          *
         * 1. Choose an adapter:                                                    *
         *    https://sailsjs.com/plugins/databases                                 *
         *                                                                          *
         * 2. Install it as a dependency of your Sails app.                         *
         *    (For example:  npm install sails-mysql --save)                        *
         *                                                                          *
         * 3. Then pass it in, along with a connection URL.                         *
         *    (See https://sailsjs.com/config/datastores for help.)                 *
         *                                                                          *
         ***************************************************************************/
        adapter: "sails-postgresql",
        url: "postgres://tfjyfnpnbuaobr:12bdab94b7c8f92beb350a36ac6a19eba9f3a368a3494c4e8587e52263ed6692@ec2-54-167-152-185.compute-1.amazonaws.com:5432/dbfcpsp9t4ocal",
        /* 
             ssl:true,    <-- asi estaba        
            */
        ssl: {
            sslmode: "require",
            rejectUnauthorized: false
        }
        /*adapter: "sails-mysql",
                                                                                                            host: "localhost",
                                                                                                            user: "root",
                                                                                                            password: "",
                                                                                                            database: "chatapp",
                                                                                                            port: "3306"*/
    }
};