/*
 * Copyright (C) 2011 Flamingo Project (http://www.cloudine.io).
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
Ext.define('Flamingo2.view.monitoring.spark.JobSumChart', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.sparkJobSumChart',

    items: [
        {
            xtype: 'cartesian',
            reference: 'jobChart',
            height: 160,
            bind: {
                store: '{timeSeriesStore}'
            },
            interactions: 'itemhighlight',
            axes: [
                {
                    type: 'numeric',
                    fields: 'cnt',
                    position: 'left',
                    grid: true,
                    titleMargin: 20,
                    label: {
                        fontFamily: 'Nanum Gothic',
                        fontSize: '12px'
                    }
                },
                {
                    type: 'category',
                    grid: true,
                    fields: 'date',
                    position: 'bottom',
                    label: {
                        fontFamily: 'Nanum Gothic',
                        fontSize: '12px'
                    }
                }
            ],
            animation: Ext.isIE8 ? false : {
                easing: 'bounceOut',
                duration: 500
            },
            series: [
                {
                    type: 'area',
                    axis: 'left',
                    xField: 'date',
                    yField: 'cnt',
                    style: {
                        opacity: 0.50,
                        minGapWidth: 20,
                        fill: '#DB4D4D', // backgroud color
                        stroke: 'black' // line color
                    },
                    marker: {
                        opacity: 0,
                        scaling: 0.01,
                        fx: {
                            duration: 200,
                            easing: 'easeOut'
                        }
                    },
                    highlightCfg: {
                        opacity: 1,
                        scaling: 1.5
                    },
                    tooltip: {
                        trackMouse: true,
                        style: 'background: #fff',
                        renderer: function (storeItem, item) {
                            this.setHtml(storeItem.get('date') + ' : <span style="color: #CC2900; "><b>'
                                + storeItem.get('cnt') + message.msg('monitoring.yarn.tip.count') + '</b></font>');
                        }
                    },
                    label: {
                        field: 'cnt',
                        display: 'insideEnd',
                        renderer: function (value) {
                            return value.toFixed(1);
                        }
                    }
                }
            ],
            listeners: {
                afterrender: 'onJobSumChartAfterRender'
            }
        }
    ],
    tools: [
        {
            type: 'refresh',
            tooltip: message.msg('common.refresh'),
            handler: 'jobChartLoad'
        }
    ]
});