package org.opencloudengine.flamingo2.collector.logging;

import java.io.PrintWriter;
import java.io.StringWriter;
import java.util.*;

/**
 * String Utility.
 *
 * @author Cloudine Inc
 * @since 2.0
 */
public class StringUtils {

    /**
     * Properties의 key value를 문자열로 변환한다.
     *
     * @param properties Properties
     * @return key value 문자열
     */
    public static String propertiesToString(Properties properties) {
        StringWriter writer = new StringWriter();
        PrintWriter out = new PrintWriter(writer);
        Set<Object> keys = properties.keySet();
        for (Object key : keys) {
            out.println(key + "=" + properties.get(key));
        }
        return writer.getBuffer().toString();
    }

    /**
     * 문자열 리스트를 문자열 배열로 변환한다.
     *
     * @param values 문자열 리스트
     * @return 문자열 배열
     */
    public static String[] collectionToStringArray(List<String> values) {
        String[] array = new String[values.size()];
        int index = 0;
        for (String value : values) {
            array[index] = value;
            index++;
        }
        return array;
    }

    /**
     * 지정한 문자열이 비어있는지 확인한다.
     *
     * @param str 테스트할 문자열
     * @return 비어있다면 <tt>true</tt>
     */
    public static boolean isEmpty(String str) {
        return (str == null || str.trim().length() < 1);
    }

    /**
     * 문자열 배열을 리스트로 변환한다.
     *
     * @param values 문자열 배열열
     * @return 문자열 리스트
     */
    public static List<String> arrayToCollection(String[] values) {
        List<String> list = new ArrayList<String>(values.length);
        Collections.addAll(list, values);
        return list;
    }

    /**
     * 전체 문자열에서 패턴을 검색하여 새로운 패턴을 적용한다.
     * <p>
     * <pre>
     * String result = StringUtils.replace("Hello World", "Hello", "World"); // "World World"
     * </pre>
     * </p>
     *
     * @param inString   전체 문자열
     * @param oldPattern 검색할 문자열 패턴
     * @param newPattern 새로 적용할 문자열 패턴
     * @return 교체된 문자열
     */
    public static String replace(String inString, String oldPattern, String newPattern) {
        return org.springframework.util.StringUtils.replace(inString, oldPattern, newPattern);
    }

    /**
     * 문자열에서 Prefix를 제거한다.
     *
     * @param message 문자열
     * @param prefix  제거할 Prefix
     * @param isTrim  Prefix를 제거한 문자열의 Trim 처리 여부
     * @return Prefix를 제거한 문자열
     */
    public static String removePrefix(String message, String prefix, boolean isTrim) {
        if (message.contains(prefix)) {
            int start = message.indexOf(prefix) + prefix.length();
            return isTrim ? message.substring(start).trim() : message.substring(start);
        }
        return message;
    }

    /**
     * Escape 처리한 문자열을 unescape처리한다.
     *
     * @param string Escape 처리한 문자열
     * @return escape Unescape 처리한 문자열
     */
    public static String unescape(String string) {
        StringBuilder builder = new StringBuilder();
        builder.ensureCapacity(string.length());
        int lastPos = 0, pos = 0;
        char ch;
        while (lastPos < string.length()) {
            pos = string.indexOf("%", lastPos);
            if (pos == lastPos) {
                if (string.charAt(pos + 1) == 'u') {
                    ch = (char) Integer.parseInt(string
                            .substring(pos + 2, pos + 6), 16);
                    builder.append(ch);
                    lastPos = pos + 6;
                } else {
                    ch = (char) Integer.parseInt(string
                            .substring(pos + 1, pos + 3), 16);
                    builder.append(ch);
                    lastPos = pos + 3;
                }
            } else {
                if (pos == -1) {
                    builder.append(string.substring(lastPos));
                    lastPos = string.length();
                } else {
                    builder.append(string.substring(lastPos, pos));
                    lastPos = pos;
                }
            }
        }
        return builder.toString();
    }

    /**
     * 지정한 문자열을 escape 처리한다.
     *
     * @param string Escape 처리할 문자열
     * @return escape 처리한 문자열
     */
    public static String escape(String string) {
        int i;
        char j;
        StringBuilder builder = new StringBuilder();
        builder.ensureCapacity(string.length() * 6);
        for (i = 0; i < string.length(); i++) {
            j = string.charAt(i);
            if (Character.isDigit(j) || Character.isLowerCase(j) || Character.isUpperCase(j))
                builder.append(j);
            else if (j < 256) {
                builder.append("%");
                if (j < 16)
                    builder.append("0");
                builder.append(Integer.toString(j, 16));
            } else {
                builder.append("%u");
                builder.append(Integer.toString(j, 16));
            }
        }
        return builder.toString();
    }
}