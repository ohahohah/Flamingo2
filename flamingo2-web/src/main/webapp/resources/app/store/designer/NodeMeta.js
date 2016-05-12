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

/**
 * NodeMeta Store
 *
 * @class
 * @extends Ext.data.Store
 * @author <a href="mailto:hrkenshin@gmail.com">Seungbaek Lee</a>
 */
Ext.define('Flamingo2.store.designer.NodeMeta', {
    extend: 'Ext.data.Store',
    alias: 'store.nodeMeta',

    model: 'Flamingo2.model.designer.NodeMeta',

    data: [
        {
            "type": "START",
            "identifier": "START",
            "name": "Start",
            "minPrevNodeCounts": 0,
            "maxPrevNodeCounts": 0,
            "minNextNodeCounts": 1,
            "maxNextNodeCounts": -1,
            "notAllowedPrevTypes": "",
            "notAllowedNextTypes": "END,IN,OUT",
            "notAllowedPrevNodes": "",
            "notAllowedNextNodes": "END"
        },
        {
            "type": "END",
            "identifier": "END",
            "name": "End",
            "minPrevNodeCounts": 1,
            "maxPrevNodeCounts": -1,
            "minNextNodeCounts": 0,
            "maxNextNodeCounts": 0,
            "notAllowedPrevTypes": "START,IN,OUT",
            "notAllowedNextTypes": "",
            "notAllowedPrevNodes": "START",
            "notAllowedNextNodes": ""
        },
        {
            "type": "HADOOP",
            "icon": CONSTANTS.CONTEXT_PATH + "/resources/images/etl/mapreduce.png",
            "identifier": "HADOOP_MR",
            "name": message.msg('common.mapreduce'),
            "qualifierLabel": "mr",
            "description": "Apache Hadoop MapReduce",
            "isCheckColumns": false,
            "fixedInputColumns": false,
            "fixedOutputColumns": false,
            "readOnlyOutputColumns": false,
            "ignoreInput": true,
            "ignoreOutput": true,
            "minPrevNodeCounts": 0,
            "maxPrevNodeCounts": -1,
            "minNextNodeCounts": 0,
            "maxNextNodeCounts": -1,
            "notAllowedPrevTypes": "",
            "notAllowedNextTypes": "",
            "notAllowedPrevNodes": "",
            "notAllowedNextNodes": ""
        },
        {
            "type": "HADOOP",
            "icon": CONSTANTS.CONTEXT_PATH + "/resources/images/etl/apache_pig.png",
            "identifier": "HADOOP_PIG",
            "name": message.msg('common.pig'),
            "qualifierLabel": "pig",
            "description": "Apache Pig Latin Script",
            "isCheckColumns": false,
            "fixedInputColumns": false,
            "fixedOutputColumns": false,
            "readOnlyOutputColumns": false,
            "ignoreInput": true,
            "ignoreOutput": true,
            "minPrevNodeCounts": 1,
            "maxPrevNodeCounts": 1,
            "minNextNodeCounts": 1,
            "maxNextNodeCounts": -1,
            "notAllowedPrevTypes": "",
            "notAllowedNextTypes": "",
            "notAllowedPrevNodes": "",
            "notAllowedNextNodes": ""
        },
        {
            "type": "HADOOP",
            "icon": CONSTANTS.CONTEXT_PATH + "/resources/images/etl/apache_hive.png",
            "identifier": "HADOOP_HIVE",
            "name": "Apache Hive",
            "qualifierLabel": "hive",
            "description": "Apache Hive QL",
            "isCheckColumns": false,
            "fixedInputColumns": false,
            "fixedOutputColumns": false,
            "readOnlyOutputColumns": false,
            "ignoreInput": true,
            "ignoreOutput": true,
            "minPrevNodeCounts": 1,
            "maxPrevNodeCounts": -1,
            "minNextNodeCounts": 1,
            "maxNextNodeCounts": -1,
            "notAllowedPrevTypes": "",
            "notAllowedNextTypes": "",
            "notAllowedNextNodes": ""
        },
        {
            "type": "HADOOP",
            "icon": CONSTANTS.CONTEXT_PATH + "/resources/images/etl/java.png",
            "identifier": "HADOOP_JAVA",
            "name": "Java",
            "qualifierLabel": "java",
            "description": "Java Application",
            "isCheckColumns": false,
            "fixedInputColumns": false,
            "fixedOutputColumns": false,
            "readOnlyOutputColumns": false,
            "ignoreInput": true,
            "ignoreOutput": true,
            "minPrevNodeCounts": 1,
            "maxPrevNodeCounts": -1,
            "minNextNodeCounts": 1,
            "maxNextNodeCounts": -1,
            "notAllowedPrevTypes": "",
            "notAllowedNextTypes": "",
            "notAllowedNextNodes": ""
        },
        {
            "type": "HADOOP",
            "icon": CONSTANTS.CONTEXT_PATH + "/resources/images/etl/java.png",
            "identifier": "HADOOP_SQOOP_IMPORT",
            "name": "Sqoop Import",
            "qualifierLabel": "si",
            "description": "Sqoop Import",
            "isCheckColumns": false,
            "fixedInputColumns": false,
            "fixedOutputColumns": false,
            "readOnlyOutputColumns": false,
            "ignoreInput": true,
            "ignoreOutput": true,
            "minPrevNodeCounts": 1,
            "maxPrevNodeCounts": -1,
            "minNextNodeCounts": 1,
            "maxNextNodeCounts": -1,
            "notAllowedPrevTypes": "",
            "notAllowedNextTypes": "",
            "notAllowedNextNodes": ""
        },
        {
            "type": "HADOOP",
            "icon": CONSTANTS.CONTEXT_PATH + "/resources/images/etl/java.png",
            "identifier": "HADOOP_SQOOP_EXPORT",
            "name": "Sqoop Export",
            "qualifierLabel": "so",
            "description": "Sqoop Export",
            "isCheckColumns": false,
            "fixedInputColumns": false,
            "fixedOutputColumns": false,
            "readOnlyOutputColumns": false,
            "ignoreInput": true,
            "ignoreOutput": true,
            "minPrevNodeCounts": 1,
            "maxPrevNodeCounts": -1,
            "minNextNodeCounts": 0,
            "maxNextNodeCounts": -1,
            "notAllowedPrevTypes": "",
            "notAllowedNextTypes": "",
            "notAllowedNextNodes": ""
        },
        {
            "type": "OTHERS",
            "icon": CONSTANTS.CONTEXT_PATH + "/resources/images/etl/shell.png",
            "identifier": "HADOOP_SHELL",
            "name": message.msg('common.bash'),
            "qualifierLabel": "shell",
            "description": "Shell Script",
            "isCheckColumns": false,
            "fixedInputColumns": false,
            "fixedOutputColumns": false,
            "readOnlyOutputColumns": false,
            "ignoreInput": true,
            "ignoreOutput": true,
            "minPrevNodeCounts": 1,
            "maxPrevNodeCounts": -1,
            "minNextNodeCounts": 1,
            "maxNextNodeCounts": -1,
            "notAllowedPrevTypes": "",
            "notAllowedNextTypes": "",
            "notAllowedNextNodes": ""
        },
        {
            "type": "OTHERS",
            "icon": CONSTANTS.CONTEXT_PATH + "/resources/images/etl/python.png",
            "identifier": "HADOOP_PYTHON",
            "name": message.msg('common.python'),
            "qualifierLabel": "python",
            "description": "Python Application",
            "isCheckColumns": false,
            "fixedInputColumns": false,
            "fixedOutputColumns": false,
            "readOnlyOutputColumns": false,
            "ignoreInput": true,
            "ignoreOutput": true,
            "minPrevNodeCounts": 1,
            "maxPrevNodeCounts": -1,
            "minNextNodeCounts": 1,
            "maxNextNodeCounts": -1,
            "notAllowedPrevTypes": "",
            "notAllowedNextTypes": "",
            "notAllowedNextNodes": ""
        },
        {
            "type": "STATISTICS",
            "icon": CONSTANTS.CONTEXT_PATH + "/resources/images/etl/numeric_stats.png",
            "jobType": "MAPREDUCE",
            "identifier": "ALG_ANKUS_NUMERIC_STATISTICS",
            "name": "Numeric Statistics (Distribution)",
            "qualifierLabel": "anumstat",
            "description": "Numeric Statistics (Distribution)",
            "isCheckColumns": false,
            "fixedInputColumns": false,
            "fixedOutputColumns": false,
            "readOnlyOutputColumns": false,
            "ignoreInput": true,
            "ignoreOutput": true,
            "minPrevNodeCounts": 0,
            "maxPrevNodeCounts": -1,
            "minNextNodeCounts": 0,
            "maxNextNodeCounts": -1,
            "notAllowedPrevTypes": "",
            "notAllowedNextTypes": "",
            "notAllowedPrevNodes": "",
            "notAllowedNextNodes": ""
        },
        {
            "type": "STATISTICS",
            "icon": CONSTANTS.CONTEXT_PATH + "/resources/images/etl/norminal_stats.png",
            "jobType": "MAPREDUCE",
            "identifier": "ALG_ANKUS_NOMINAL_STATISTICS",
            "name": "Nominal Statistics (Distribution)",
            "qualifierLabel": "nominal",
            "description": "Nominal Statistics (Distribution)",
            "isCheckColumns": false,
            "fixedInputColumns": false,
            "fixedOutputColumns": false,
            "readOnlyOutputColumns": false,
            "ignoreInput": true,
            "ignoreOutput": true,
            "minPrevNodeCounts": 0,
            "maxPrevNodeCounts": -1,
            "minNextNodeCounts": 0,
            "maxNextNodeCounts": -1,
            "notAllowedPrevTypes": "",
            "notAllowedNextTypes": "",
            "notAllowedPrevNodes": "",
            "notAllowedNextNodes": ""
        },
        {
            "type": "STATISTICS",
            "icon": CONSTANTS.CONTEXT_PATH + "/resources/images/etl/cf_sum_stats.png",
            "jobType": "MAPREDUCE",
            "identifier": "ALG_ANKUS_CERTAIN_FACTOR_SUM",
            "name": "Certainty Factor based Sum",
            "qualifierLabel": "acfs",
            "description": message.msg('workflow.common.desc.cf_sum_stats'),
            "isCheckColumns": false,
            "fixedInputColumns": false,
            "fixedOutputColumns": false,
            "readOnlyOutputColumns": false,
            "ignoreInput": true,
            "ignoreOutput": true,
            "minPrevNodeCounts": 0,
            "maxPrevNodeCounts": -1,
            "minNextNodeCounts": 0,
            "maxNextNodeCounts": -1,
            "notAllowedPrevTypes": "",
            "notAllowedNextTypes": "",
            "notAllowedPrevNodes": "",
            "notAllowedNextNodes": ""
        },
        {
            "type": "ETL",
            "icon": CONSTANTS.CONTEXT_PATH + "/resources/images/etl/normalization.png",
            "jobType": "MAPREDUCE",
            "identifier": "ALG_ANKUS_NORMAL",
            "name": "Min/Max Normalization",
            "qualifierLabel": "anormal",
            "description": message.msg('workflow.common.desc.normalization'),
            "isCheckColumns": false,
            "fixedInputColumns": false,
            "fixedOutputColumns": false,
            "readOnlyOutputColumns": false,
            "ignoreInput": true,
            "ignoreOutput": true,
            "minPrevNodeCounts": 0,
            "maxPrevNodeCounts": -1,
            "minNextNodeCounts": 0,
            "maxNextNodeCounts": -1,
            "notAllowedPrevTypes": "",
            "notAllowedNextTypes": "",
            "notAllowedPrevNodes": "",
            "notAllowedNextNodes": ""
        },
        {
            "type": "ETL",
            "icon": CONSTANTS.CONTEXT_PATH + "/resources/images/etl/mapreduce.png",
            "jobType": "MAPREDUCE",
            "identifier": "ETL_CHAR_REMOVER",
            "name": "Remove Characters",
            "qualifierLabel": "remove_chars",
            "description": "Remove characters from row",
            "isCheckColumns": false,
            "fixedInputColumns": false,
            "fixedOutputColumns": false,
            "readOnlyOutputColumns": false,
            "ignoreInput": true,
            "ignoreOutput": true,
            "minPrevNodeCounts": 0,
            "maxPrevNodeCounts": -1,
            "minNextNodeCounts": 0,
            "maxNextNodeCounts": -1,
            "notAllowedPrevTypes": "",
            "notAllowedNextTypes": "",
            "notAllowedPrevNodes": "",
            "notAllowedNextNodes": ""
        },
        {
            "type": "ETL",
            "icon": CONSTANTS.CONTEXT_PATH + "/resources/images/etl/mapreduce.png",
            "jobType": "MAPREDUCE",
            "identifier": "ETL_APACHE_ACCESS",
            "name": "Apache Access To CSV",
            "qualifierLabel": "apache_access",
            "description": "Convert Apache Access Log to CSV File",
            "isCheckColumns": false,
            "fixedInputColumns": false,
            "fixedOutputColumns": false,
            "readOnlyOutputColumns": false,
            "ignoreInput": true,
            "ignoreOutput": true,
            "minPrevNodeCounts": 0,
            "maxPrevNodeCounts": -1,
            "minNextNodeCounts": 0,
            "maxNextNodeCounts": -1,
            "notAllowedPrevTypes": "",
            "notAllowedNextTypes": "",
            "notAllowedPrevNodes": "",
            "notAllowedNextNodes": ""
        },
        {
            "type": "ETL",
            "icon": CONSTANTS.CONTEXT_PATH + "/resources/images/etl/mapreduce.png",
            "jobType": "MAPREDUCE",
            "identifier": "ETL_UIMA_SEQ",
            "name": "UIMA To Sequence File",
            "qualifierLabel": "uima_seq",
            "description": "Convert Text File To Sequence File for UIMA ",
            "isCheckColumns": false,
            "fixedInputColumns": false,
            "fixedOutputColumns": false,
            "readOnlyOutputColumns": false,
            "ignoreInput": true,
            "ignoreOutput": true,
            "minPrevNodeCounts": 0,
            "maxPrevNodeCounts": -1,
            "minNextNodeCounts": 0,
            "maxNextNodeCounts": -1,
            "notAllowedPrevTypes": "",
            "notAllowedNextTypes": "",
            "notAllowedPrevNodes": "",
            "notAllowedNextNodes": ""
        },
        {
            "type": "ETL",
            "icon": CONSTANTS.CONTEXT_PATH + "/resources/images/etl/mapreduce.png",
            "jobType": "MAPREDUCE",
            "identifier": "ETL_UIMA_APP",
            "name": "UIMA Application",
            "qualifierLabel": "uima_app",
            "description": "UIMA Application",
            "isCheckColumns": false,
            "fixedInputColumns": false,
            "fixedOutputColumns": false,
            "readOnlyOutputColumns": false,
            "ignoreInput": true,
            "ignoreOutput": true,
            "minPrevNodeCounts": 0,
            "maxPrevNodeCounts": -1,
            "minNextNodeCounts": 0,
            "maxNextNodeCounts": -1,
            "notAllowedPrevTypes": "",
            "notAllowedNextTypes": "",
            "notAllowedPrevNodes": "",
            "notAllowedNextNodes": ""
        },
        {
            "type": "MINING",
            "icon": CONSTANTS.CONTEXT_PATH + "/resources/images/etl/binary.png",
            "jobType": "MAPREDUCE",
            "identifier": "ALG_ANKUS_CORR_BOOL",
            "name": "Boolean Similarity/Correlation",
            "qualifierLabel": "acorrb",
            "description": message.msg('workflow.common.desc.boolean_similarity_correlation'),
            "isCheckColumns": false,
            "fixedInputColumns": false,
            "fixedOutputColumns": false,
            "readOnlyOutputColumns": false,
            "ignoreInput": true,
            "ignoreOutput": true,
            "minPrevNodeCounts": 0,
            "maxPrevNodeCounts": -1,
            "minNextNodeCounts": 0,
            "maxNextNodeCounts": -1,
            "notAllowedPrevTypes": "",
            "notAllowedNextTypes": "",
            "notAllowedPrevNodes": "",
            "notAllowedNextNodes": ""
        },
        {
            "type": "MINING",
            "icon": CONSTANTS.CONTEXT_PATH + "/resources/images/etl/numeric.png",
            "jobType": "MAPREDUCE",
            "identifier": "ALG_ANKUS_CORR_NUMERIC",
            "name": "Numeric Similarity/Correlation",
            "qualifierLabel": "acorrn",
            "description": message.msg('workflow.common.desc.numeric_similarity_correlation'),
            "isCheckColumns": false,
            "fixedInputColumns": false,
            "fixedOutputColumns": false,
            "readOnlyOutputColumns": false,
            "ignoreInput": true,
            "ignoreOutput": true,
            "minPrevNodeCounts": 0,
            "maxPrevNodeCounts": -1,
            "minNextNodeCounts": 0,
            "maxNextNodeCounts": -1,
            "notAllowedPrevTypes": "",
            "notAllowedNextTypes": "",
            "notAllowedPrevNodes": "",
            "notAllowedNextNodes": ""
        },
        {
            "type": "MINING",
            "icon": CONSTANTS.CONTEXT_PATH + "/resources/images/etl/string.png",
            "jobType": "MAPREDUCE",
            "identifier": "ALG_ANKUS_CORR_STRING",
            "name": "String Similarity",
            "qualifierLabel": "acorrs",
            "description": message.msg('workflow.common.desc.string_similarity_correlation'),
            "isCheckColumns": false,
            "fixedInputColumns": false,
            "fixedOutputColumns": false,
            "readOnlyOutputColumns": false,
            "ignoreInput": true,
            "ignoreOutput": true,
            "minPrevNodeCounts": 0,
            "maxPrevNodeCounts": -1,
            "minNextNodeCounts": 0,
            "maxNextNodeCounts": -1,
            "notAllowedPrevTypes": "",
            "notAllowedNextTypes": "",
            "notAllowedPrevNodes": "",
            "notAllowedNextNodes": ""
        },
        {
            "type": "MINING",
            "icon": CONSTANTS.CONTEXT_PATH + "/resources/images/etl/id3.png",
            "jobType": "MAPREDUCE",
            "identifier": "ALG_ANKUS_ID3",
            "name": "ID3 Classification",
            "qualifierLabel": "aid3",
            "description": "ID3 based Classification",
            "isCheckColumns": false,
            "fixedInputColumns": false,
            "fixedOutputColumns": false,
            "readOnlyOutputColumns": false,
            "ignoreInput": true,
            "ignoreOutput": true,
            "minPrevNodeCounts": 0,
            "maxPrevNodeCounts": -1,
            "minNextNodeCounts": 0,
            "maxNextNodeCounts": -1,
            "notAllowedPrevTypes": "",
            "notAllowedNextTypes": "",
            "notAllowedPrevNodes": "",
            "notAllowedNextNodes": ""
        },

        {
            "type": "MINING",
            "icon": CONSTANTS.CONTEXT_PATH + "/resources/images/etl/kmeans.png",
            "jobType": "MAPREDUCE",
            "identifier": "ALG_ANKUS_KMEANS",
            "name": "K-Means Clustering",
            "qualifierLabel": "akmeans",
            "description": "K-Means based Clustering",
            "isCheckColumns": false,
            "fixedInputColumns": false,
            "fixedOutputColumns": false,
            "readOnlyOutputColumns": false,
            "ignoreInput": true,
            "ignoreOutput": true,
            "minPrevNodeCounts": 0,
            "maxPrevNodeCounts": -1,
            "minNextNodeCounts": 0,
            "maxNextNodeCounts": -1,
            "notAllowedPrevTypes": "",
            "notAllowedNextTypes": "",
            "notAllowedPrevNodes": "",
            "notAllowedNextNodes": ""
        },
        {
            "type": "MINING",
            "icon": CONSTANTS.CONTEXT_PATH + "/resources/images/etl/em.png",
            "jobType": "MAPREDUCE",
            "identifier": "ALG_ANKUS_EM",
            "name": "EM Clustering",
            "qualifierLabel": "aem",
            "description": "EM based Clustering",
            "isCheckColumns": false,
            "fixedInputColumns": false,
            "fixedOutputColumns": false,
            "readOnlyOutputColumns": false,
            "ignoreInput": true,
            "ignoreOutput": true,
            "minPrevNodeCounts": 0,
            "maxPrevNodeCounts": -1,
            "minNextNodeCounts": 0,
            "maxNextNodeCounts": -1,
            "notAllowedPrevTypes": "",
            "notAllowedNextTypes": "",
            "notAllowedPrevNodes": "",
            "notAllowedNextNodes": ""
        },
        {
            "type": "MINING",
            "icon": CONSTANTS.CONTEXT_PATH + "/resources/images/etl/cf_similarity.png",
            "jobType": "MAPREDUCE",
            "identifier": "ALG_ANKUS_CF_SIM",
            "name": "CF based Similarity",
            "qualifierLabel": "acfsim",
            "description": "Collaborative Filtering based Similarity",
            "isCheckColumns": false,
            "fixedInputColumns": false,
            "fixedOutputColumns": false,
            "readOnlyOutputColumns": false,
            "ignoreInput": true,
            "ignoreOutput": true,
            "minPrevNodeCounts": 0,
            "maxPrevNodeCounts": -1,
            "minNextNodeCounts": 0,
            "maxNextNodeCounts": -1,
            "notAllowedPrevTypes": "",
            "notAllowedNextTypes": "",
            "notAllowedPrevNodes": "",
            "notAllowedNextNodes": ""
        },
        {
            "type": "MINING",
            "icon": CONSTANTS.CONTEXT_PATH + "/resources/images/etl/content_similarity.png",
            "jobType": "MAPREDUCE",
            "identifier": "ALG_ANKUS_CONTENT_SIM",
            "name": "Content based Similarity",
            "qualifierLabel": "aconsim",
            "description": "Content based Similarity",
            "isCheckColumns": false,
            "fixedInputColumns": false,
            "fixedOutputColumns": false,
            "readOnlyOutputColumns": false,
            "ignoreInput": true,
            "ignoreOutput": true,
            "minPrevNodeCounts": 0,
            "maxPrevNodeCounts": -1,
            "minNextNodeCounts": 0,
            "maxNextNodeCounts": -1,
            "notAllowedPrevTypes": "",
            "notAllowedNextTypes": "",
            "notAllowedPrevNodes": "",
            "notAllowedNextNodes": ""
        },
        {
            "type": "MINING",
            "icon": CONSTANTS.CONTEXT_PATH + "/resources/images/etl/userbased.png",
            "jobType": "MAPREDUCE",
            "identifier": "ALG_ANKUS_CF_USER_RECOMMEND",
            "name": "User Similarity based Recommendation",
            "qualifierLabel": "auserrec",
            "description": "Collaborative Filtering User based Recommendation",
            "isCheckColumns": false,
            "fixedInputColumns": false,
            "fixedOutputColumns": false,
            "readOnlyOutputColumns": false,
            "ignoreInput": true,
            "ignoreOutput": true,
            "minPrevNodeCounts": 0,
            "maxPrevNodeCounts": -1,
            "minNextNodeCounts": 0,
            "maxNextNodeCounts": -1,
            "notAllowedPrevTypes": "",
            "notAllowedNextTypes": "",
            "notAllowedPrevNodes": "",
            "notAllowedNextNodes": ""
        },
        {
            "type": "MINING",
            "icon": CONSTANTS.CONTEXT_PATH + "/resources/images/etl/itembased.png",
            "jobType": "MAPREDUCE",
            "identifier": "ALG_ANKUS_CF_ITEM_RECOMMEND",
            "name": "Item Similarity based Recommendation",
            "qualifierLabel": "aitemrec",
            "description": "Collaborative Filtering Item based Recommendation",
            "isCheckColumns": false,
            "fixedInputColumns": false,
            "fixedOutputColumns": false,
            "readOnlyOutputColumns": false,
            "ignoreInput": true,
            "ignoreOutput": true,
            "minPrevNodeCounts": 0,
            "maxPrevNodeCounts": -1,
            "minNextNodeCounts": 0,
            "maxNextNodeCounts": -1,
            "notAllowedPrevTypes": "",
            "notAllowedNextTypes": "",
            "notAllowedPrevNodes": "",
            "notAllowedNextNodes": ""
        },
        {
            "type": "MAHOUT",
            "icon": CONSTANTS.CONTEXT_PATH + "/resources/images/etl/mapreduce.png",
            "jobType": "MAPREDUCE",
            "identifier": "ALG_MAHOUT_CF_ITEM",
            "name": "Item-Based Collaborative Filtering",
            "qualifierLabel": "mahoutitemrec",
            "description": "Item-Based Collaborative Filtering",
            "isCheckColumns": false,
            "fixedInputColumns": false,
            "fixedOutputColumns": false,
            "readOnlyOutputColumns": false,
            "ignoreInput": true,
            "ignoreOutput": true,
            "minPrevNodeCounts": 0,
            "maxPrevNodeCounts": -1,
            "minNextNodeCounts": 0,
            "maxNextNodeCounts": -1,
            "notAllowedPrevTypes": "",
            "notAllowedNextTypes": "",
            "notAllowedPrevNodes": "",
            "notAllowedNextNodes": ""
        },
        {
            "type": "MAHOUT",
            "icon": CONSTANTS.CONTEXT_PATH + "/resources/images/etl/mapreduce.png",
            "jobType": "MAPREDUCE",
            "identifier": "ALG_MAHOUT_MATRIX_FACT_ALS",
            "name": "Factorized Recommendation",
            "qualifierLabel": "mahoutmatrixfact",
            "description": "Factorized Recommendation",
            "isCheckColumns": false,
            "fixedInputColumns": false,
            "fixedOutputColumns": false,
            "readOnlyOutputColumns": false,
            "ignoreInput": true,
            "ignoreOutput": true,
            "minPrevNodeCounts": 0,
            "maxPrevNodeCounts": -1,
            "minNextNodeCounts": 0,
            "maxNextNodeCounts": -1,
            "notAllowedPrevTypes": "",
            "notAllowedNextTypes": "",
            "notAllowedPrevNodes": "",
            "notAllowedNextNodes": ""
        },
        {
            "type": "MAHOUT",
            "icon": CONSTANTS.CONTEXT_PATH + "/resources/images/etl/mapreduce.png",
            "jobType": "MAPREDUCE",
            "identifier": "ALG_MAHOUT_PARALLEL_ALS",
            "name": "Parallel ALS",
            "qualifierLabel": "mahoutparallelals",
            "description": "Parallel ALS",
            "isCheckColumns": false,
            "fixedInputColumns": false,
            "fixedOutputColumns": false,
            "readOnlyOutputColumns": false,
            "ignoreInput": true,
            "ignoreOutput": true,
            "minPrevNodeCounts": 0,
            "maxPrevNodeCounts": -1,
            "minNextNodeCounts": 0,
            "maxNextNodeCounts": -1,
            "notAllowedPrevTypes": "",
            "notAllowedNextTypes": "",
            "notAllowedPrevNodes": "",
            "notAllowedNextNodes": ""
        },
        {
            "type": "MAHOUT",
            "icon": CONSTANTS.CONTEXT_PATH + "/resources/images/etl/mapreduce.png",
            "jobType": "MAPREDUCE",
            "identifier": "ALG_MAHOUT_KMEANS",
            "name": "k-Means Clustering",
            "qualifierLabel": "mahoutkmeans",
            "description": "k-Means Clustering",
            "isCheckColumns": false,
            "fixedInputColumns": false,
            "fixedOutputColumns": false,
            "readOnlyOutputColumns": false,
            "ignoreInput": true,
            "ignoreOutput": true,
            "minPrevNodeCounts": 0,
            "maxPrevNodeCounts": -1,
            "minNextNodeCounts": 0,
            "maxNextNodeCounts": -1,
            "notAllowedPrevTypes": "",
            "notAllowedNextTypes": "",
            "notAllowedPrevNodes": "",
            "notAllowedNextNodes": ""
        },
        {
            "type": "MAHOUT",
            "icon": CONSTANTS.CONTEXT_PATH + "/resources/images/etl/mapreduce.png",
            "jobType": "MAPREDUCE",
            "identifier": "ALG_MAHOUT_FUZZY_K_MEANS",
            "name": "Fuzzy k-Means Clustering",
            "qualifierLabel": "mahoutfuzzykmeans",
            "description": "Fuzzy k-Means Clustering",
            "isCheckColumns": false,
            "fixedInputColumns": false,
            "fixedOutputColumns": false,
            "readOnlyOutputColumns": false,
            "ignoreInput": true,
            "ignoreOutput": true,
            "minPrevNodeCounts": 0,
            "maxPrevNodeCounts": -1,
            "minNextNodeCounts": 0,
            "maxNextNodeCounts": -1,
            "notAllowedPrevTypes": "",
            "notAllowedNextTypes": "",
            "notAllowedPrevNodes": "",
            "notAllowedNextNodes": ""
        },
        {
            "type": "MAHOUT",
            "icon": CONSTANTS.CONTEXT_PATH + "/resources/images/etl/mapreduce.png",
            "jobType": "MAPREDUCE",
            "identifier": "ALG_MAHOUT_STREAMING_K_MEANS",
            "name": "Streaming k-Means Clustering",
            "qualifierLabel": "mahoutstreamingkmeans",
            "description": "Streaming k-Means Clustering",
            "isCheckColumns": false,
            "fixedInputColumns": false,
            "fixedOutputColumns": false,
            "readOnlyOutputColumns": false,
            "ignoreInput": true,
            "ignoreOutput": true,
            "minPrevNodeCounts": 0,
            "maxPrevNodeCounts": -1,
            "minNextNodeCounts": 0,
            "maxNextNodeCounts": -1,
            "notAllowedPrevTypes": "",
            "notAllowedNextTypes": "",
            "notAllowedPrevNodes": "",
            "notAllowedNextNodes": ""
        },
        {
            "type": "MAHOUT",
            "icon": CONSTANTS.CONTEXT_PATH + "/resources/images/etl/mapreduce.png",
            "jobType": "MAPREDUCE",
            "identifier": "ALG_MAHOUT_QUALCLUSTER",
            "name": "Cluster Quality Summarizer",
            "qualifierLabel": "Mahout Cluster Quality Summarizer",
            "description": "Mahout Cluster Quality Summarizer",
            "isCheckColumns": false,
            "fixedInputColumns": false,
            "fixedOutputColumns": false,
            "readOnlyOutputColumns": false,
            "ignoreInput": true,
            "ignoreOutput": true,
            "minPrevNodeCounts": 0,
            "maxPrevNodeCounts": -1,
            "minNextNodeCounts": 0,
            "maxNextNodeCounts": -1,
            "notAllowedPrevTypes": "",
            "notAllowedNextTypes": "",
            "notAllowedPrevNodes": "",
            "notAllowedNextNodes": ""
        },
        {
            "type": "MAHOUT",
            "icon": CONSTANTS.CONTEXT_PATH + "/resources/images/etl/mapreduce.png",
            "jobType": "MAPREDUCE",
            "identifier": "ALG_MAHOUT_SPECTRAL_K_MEANS",
            "name": "Spectral k-Means Clustering",
            "qualifierLabel": "mahoutspectralkmeans",
            "description": "Spectral k-Means Clustering",
            "isCheckColumns": false,
            "fixedInputColumns": false,
            "fixedOutputColumns": false,
            "readOnlyOutputColumns": false,
            "ignoreInput": true,
            "ignoreOutput": true,
            "minPrevNodeCounts": 0,
            "maxPrevNodeCounts": -1,
            "minNextNodeCounts": 0,
            "maxNextNodeCounts": -1,
            "notAllowedPrevTypes": "",
            "notAllowedNextTypes": "",
            "notAllowedPrevNodes": "",
            "notAllowedNextNodes": ""
        },
        {
            "type": "MAHOUT",
            "icon": CONSTANTS.CONTEXT_PATH + "/resources/images/etl/mapreduce.png",
            "jobType": "MAPREDUCE",
            "identifier": "ALG_MAHOUT_CLUSTER_DUMP",
            "name": "Cluster Dump",
            "qualifierLabel": "mahout cluser dump",
            "description": "Cluster Dump",
            "isCheckColumns": false,
            "fixedInputColumns": false,
            "fixedOutputColumns": false,
            "readOnlyOutputColumns": false,
            "ignoreInput": true,
            "ignoreOutput": true,
            "minPrevNodeCounts": 0,
            "maxPrevNodeCounts": -1,
            "minNextNodeCounts": 0,
            "maxNextNodeCounts": -1,
            "notAllowedPrevTypes": "",
            "notAllowedNextTypes": "",
            "notAllowedPrevNodes": "",
            "notAllowedNextNodes": ""
        },
        {
            "type": "MAHOUT",
            "icon": CONSTANTS.CONTEXT_PATH + "/resources/images/etl/mapreduce.png",
            "jobType": "MAPREDUCE",
            "identifier": "ALG_MAHOUT_MINHASH",
            "name": "Minhash Clustering",
            "qualifierLabel": "minhash",
            "description": "MinHash Clustering",
            "isCheckColumns": false,
            "fixedInputColumns": false,
            "fixedOutputColumns": false,
            "readOnlyOutputColumns": false,
            "ignoreInput": true,
            "ignoreOutput": true,
            "minPrevNodeCounts": 0,
            "maxPrevNodeCounts": -1,
            "minNextNodeCounts": 0,
            "maxNextNodeCounts": -1,
            "notAllowedPrevTypes": "",
            "notAllowedNextTypes": "",
            "notAllowedPrevNodes": "",
            "notAllowedNextNodes": ""
        },
        {
            "type": "MAHOUT",
            "icon": CONSTANTS.CONTEXT_PATH + "/resources/images/etl/mapreduce.png",
            "jobType": "MAPREDUCE",
            "identifier": "ALG_MAHOUT_SEQDIRECTORY",
            "name": "To Sequence File",
            "qualifierLabel": "Mahout Seqdirectory",
            "description": "To Sequence File",
            "isCheckColumns": false,
            "fixedInputColumns": false,
            "fixedOutputColumns": false,
            "readOnlyOutputColumns": false,
            "ignoreInput": true,
            "ignoreOutput": true,
            "minPrevNodeCounts": 0,
            "maxPrevNodeCounts": -1,
            "minNextNodeCounts": 0,
            "maxNextNodeCounts": -1,
            "notAllowedPrevTypes": "",
            "notAllowedNextTypes": "",
            "notAllowedPrevNodes": "",
            "notAllowedNextNodes": ""
        },
        {
            "type": "MAHOUT",
            "icon": CONSTANTS.CONTEXT_PATH + "/resources/images/etl/mapreduce.png",
            "jobType": "MAPREDUCE",
            "identifier": "ALG_MAHOUT_SEQ2SPARSE",
            "name": "Sequence File To Sparse Vector",
            "qualifierLabel": "mahoutseq2sparse",
            "description": "Sequence File to Sparse Vector",
            "isCheckColumns": false,
            "fixedInputColumns": false,
            "fixedOutputColumns": false,
            "readOnlyOutputColumns": false,
            "ignoreInput": true,
            "ignoreOutput": true,
            "minPrevNodeCounts": 0,
            "maxPrevNodeCounts": -1,
            "minNextNodeCounts": 0,
            "maxNextNodeCounts": -1,
            "notAllowedPrevTypes": "",
            "notAllowedNextTypes": "",
            "notAllowedPrevNodes": "",
            "notAllowedNextNodes": ""
        },
        {
            "type": "MAHOUT",
            "icon": CONSTANTS.CONTEXT_PATH + "/resources/images/etl/mapreduce.png",
            "jobType": "MAPREDUCE",
            "identifier": "ALG_MAHOUT_TRAINNB",
            "name": "Train Naive Bayes / CNaive Bayes",
            "qualifierLabel": "mahouttrainnb",
            "description": "Train Naive Bayes / CNaive Bayes",
            "isCheckColumns": false,
            "fixedInputColumns": false,
            "fixedOutputColumns": false,
            "readOnlyOutputColumns": false,
            "ignoreInput": true,
            "ignoreOutput": true,
            "minPrevNodeCounts": 0,
            "maxPrevNodeCounts": -1,
            "minNextNodeCounts": 0,
            "maxNextNodeCounts": -1,
            "notAllowedPrevTypes": "",
            "notAllowedNextTypes": "",
            "notAllowedPrevNodes": "",
            "notAllowedNextNodes": ""
        },
        {
            "type": "MAHOUT",
            "icon": CONSTANTS.CONTEXT_PATH + "/resources/images/etl/mapreduce.png",
            "jobType": "MAPREDUCE",
            "identifier": "ALG_MAHOUT_TESTNB",
            "name": "Test Naive Bayes / CNaive Bayes",
            "qualifierLabel": "mahouttestnb",
            "description": "Test Naive Bayes / CNaive Bayes",
            "isCheckColumns": false,
            "fixedInputColumns": false,
            "fixedOutputColumns": false,
            "readOnlyOutputColumns": false,
            "ignoreInput": true,
            "ignoreOutput": true,
            "minPrevNodeCounts": 0,
            "maxPrevNodeCounts": -1,
            "minNextNodeCounts": 0,
            "maxNextNodeCounts": -1,
            "notAllowedPrevTypes": "",
            "notAllowedNextTypes": "",
            "notAllowedPrevNodes": "",
            "notAllowedNextNodes": ""
        },
        {
            "type": "OTHERS",
            "icon": CONSTANTS.CONTEXT_PATH + "/resources/images/etl/shell.png",
            "identifier": "INHERIT",
            "name": 'Inherit',
            "qualifierLabel": "Inherit",
            "description": "Inherit",
            "isCheckColumns": false,
            "fixedInputColumns": false,
            "fixedOutputColumns": false,
            "readOnlyOutputColumns": false,
            "ignoreInput": true,
            "ignoreOutput": true,
            "minPrevNodeCounts": 1,
            "maxPrevNodeCounts": -1,
            "minNextNodeCounts": 1,
            "maxNextNodeCounts": -1,
            "notAllowedPrevTypes": "",
            "notAllowedNextTypes": "",
            "notAllowedNextNodes": ""
        }
    ]
});