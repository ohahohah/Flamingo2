/*
 * Copyright (C) 2011  Flamingo Project (http://www.cloudine.io).
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

Ext.define('Flamingo2.store.designer.property.browser.hdfs.FileStore', {
    extend: 'Ext.data.Store',
    alias: 'store.fileStoreForDesigner',

    autoLoad: false,

    fields: ['filename', 'length', 'modificationTime', 'permission', 'group', 'owner', 'replication', 'blocksize'],

    proxy: {
        type: 'ajax',
        url: '/fs/hdfs/file.json',
        reader: {
            type: 'json',
            rootProperty: 'list'
        }
    }
});