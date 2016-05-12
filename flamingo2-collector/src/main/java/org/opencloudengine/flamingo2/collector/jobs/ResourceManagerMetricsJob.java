/*
 * Copyright (C) 2011 Flamingo Project (https://github.com/OpenCloudEngine/flamingo2).
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
package org.opencloudengine.flamingo2.collector.jobs;

import org.opencloudengine.flamingo2.agent.resourcemanager.ResourceManagerAgentService;
import org.opencloudengine.flamingo2.collector.ApplicationContextRegistry;
import org.opencloudengine.flamingo2.collector.repository.SystemMetricsService;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;

import java.util.Collection;
import java.util.Map;

/**
 * Resource Manager Agent를 통해 Resource Manager의 시스템 정보를 수집하는 Job
 *
 * @author Byoung Gon, Kim
 * @version 2.0
 */
public class ResourceManagerMetricsJob extends RemoteInvocation {

    /**
     * SLF4J Logging
     */
    private Logger logger = LoggerFactory.getLogger(ResourceManagerMetricsJob.class);

    @Override
    protected void executeInternal(JobExecutionContext jobExecutionContext) throws JobExecutionException {
        logger.info("Resource Manager의 시스템 메트릭스 정보를 수집합니다.");

        ApplicationContext applicationContext = ApplicationContextRegistry.getApplicationContext();
        SystemMetricsService service = applicationContext.getBean(SystemMetricsService.class);
        Map<String, SystemConfig> configs = ConfigurationHolder.getConfigs();

        Collection<SystemConfig> values = configs.values();
        for (SystemConfig config : values) {
            String address = config.getRmAgentAddress();
            int port = config.getRmAgentPort();

            ResourceManagerAgentService resourceManagerAgentService = getResourceManagerAgentService(address, port);

            try {
                Map map = resourceManagerAgentService.getSystemMetrics();
                service.collect(config.getId(), config.getName(), "resourcemanager", map);
            } catch (Exception e) {
                throw new RuntimeException("Resource Manager Agent에서 시스템 메트릭스 정보를 확인할 수 없습니다.", e);
            }
        }
    }

    private ResourceManagerAgentService getResourceManagerAgentService(String agentAddress, int agentPort) {
        String remoteServiceUrl = this.getRemoteServiceUrl(agentAddress, agentPort, "resourcemanager");
        return this.getRemoteService(remoteServiceUrl, ResourceManagerAgentService.class);
    }
}
