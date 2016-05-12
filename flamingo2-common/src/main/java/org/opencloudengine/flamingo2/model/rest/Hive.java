/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.opencloudengine.flamingo2.model.rest;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;
import java.io.Serializable;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Hive Query Object
 *
 * @author Chiwan Park
 * @since 0.4
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "", propOrder = {
    "id",
    "username",
    "name",
    "script",
    "variable",
    "configuration",
    "library",
    "status"
})
@XmlRootElement(name = "hive")
@JsonAutoDetect(
    getterVisibility = JsonAutoDetect.Visibility.ANY,
    fieldVisibility = JsonAutoDetect.Visibility.NONE,
    setterVisibility = JsonAutoDetect.Visibility.ANY
)
public class Hive implements Serializable {

    public enum Status {
        INITIALIZED, SUBMIT, RUNNING, FAILED, SUCCESS;

        private static Map<String, Status> statusMap = new HashMap<>();

        static {
            statusMap.put("initialized", INITIALIZED);
            statusMap.put("submit", SUBMIT);
            statusMap.put("running", RUNNING);
            statusMap.put("failed", FAILED);
            statusMap.put("success", SUCCESS);
        }

        @JsonValue
        final String toValue() {
            for (Map.Entry<String, Status> entry : statusMap.entrySet()) {
                if (entry.getValue() == this) {
                    return entry.getKey();
                }
            }

            return null;
        }

        @JsonCreator
        public static Status forValue(String value) {
            value = value.toLowerCase();

            if (statusMap.containsKey(value))
                return statusMap.get(value);

            return INITIALIZED;
        }
    }

    public String id;
    public String username;
    public String name;
    public String script;
    public Map variable;
    public Map configuration;
    public List library;
    public Date registered;
    public Status status;


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getScript() {
        return script;
    }

    public void setScript(String script) {
        this.script = script;
    }

    public Map getVariable() {
        return variable;
    }

    public void setVariable(Map variable) {
        this.variable = variable;
    }

    public Map getConfiguration() {
        return configuration;
    }

    public void setConfiguration(Map configuration) {
        this.configuration = configuration;
    }

    public List getLibrary() {
        return library;
    }

    public void setLibrary(List library) {
        this.library = library;
    }

    public Date getRegistered() {
        return registered;
    }

    public void setRegistered(Date registered) {
        this.registered = registered;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Hive hive = (Hive) o;

        if (id != null ? !id.equals(hive.id) : hive.id != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

    @Override
    public String toString() {
        return "Hive{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", name='" + name + '\'' +
                ", script='" + script + '\'' +
                ", variable=" + variable +
                ", configuration=" + configuration +
                ", library=" + library +
                ", registered=" + registered +
                ", status=" + status +
                '}';
    }
}
