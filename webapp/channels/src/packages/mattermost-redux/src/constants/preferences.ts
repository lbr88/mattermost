// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import type {Theme, ThemeKey} from 'mattermost-redux/selectors/entities/preferences';

const Preferences = {
    APP_BAR: 'app_bar',
    CATEGORY_CHANNEL_OPEN_TIME: 'channel_open_time',
    CATEGORY_CHANNEL_APPROXIMATE_VIEW_TIME: 'channel_approximate_view_time',
    CATEGORY_DIRECT_CHANNEL_SHOW: 'direct_channel_show',
    CATEGORY_GROUP_CHANNEL_SHOW: 'group_channel_show',
    CATEGORY_FLAGGED_POST: 'flagged_post',
    CATEGORY_AUTO_RESET_MANUAL_STATUS: 'auto_reset_manual_status',
    CATEGORY_NOTIFICATIONS: 'notifications',
    COLLAPSED_REPLY_THREADS: 'collapsed_reply_threads',
    COLLAPSED_REPLY_THREADS_OFF: 'off',
    COLLAPSED_REPLY_THREADS_ON: 'on',
    COLLAPSED_REPLY_THREADS_FALLBACK_DEFAULT: 'off',
    COMMENTS: 'comments',
    COMMENTS_ANY: 'any',
    COMMENTS_ROOT: 'root',
    COMMENTS_NEVER: 'never',
    EMAIL: 'email',
    EMAIL_INTERVAL: 'email_interval',
    INTERVAL_FIFTEEN_MINUTES: 15 * 60,
    INTERVAL_HOUR: 60 * 60,
    INTERVAL_IMMEDIATE: 30,

    // "immediate" is a 30 second interval
    INTERVAL_NEVER: 0,
    INTERVAL_NOT_SET: -1,
    CATEGORY_DISPLAY_SETTINGS: 'display_settings',
    NAME_NAME_FORMAT: 'name_format',
    DISPLAY_PREFER_NICKNAME: 'nickname_full_name',
    DISPLAY_PREFER_FULL_NAME: 'full_name',
    DISPLAY_PREFER_USERNAME: 'username',
    MENTION_KEYS: 'mention_keys',
    USE_MILITARY_TIME: 'use_military_time',

    CATEGORY_ACTIONS_MENU: 'actions_menu',
    NAME_ACTIONS_MENU_TUTORIAL_STATE: 'actions_menu_tutorial_state',
    ACTIONS_MENU_VIEWED: 'actions_menu_modal_viewed',

    CATEGORY_CUSTOM_STATUS: 'custom_status',
    NAME_CUSTOM_STATUS_TUTORIAL_STATE: 'custom_status_tutorial_state',
    NAME_RECENT_CUSTOM_STATUSES: 'recent_custom_statuses',
    CUSTOM_STATUS_MODAL_VIEWED: 'custom_status_modal_viewed',

    CATEGORY_SIDEBAR_SETTINGS: 'sidebar_settings',
    CHANNEL_SIDEBAR_ORGANIZATION: 'channel_sidebar_organization',
    LIMIT_VISIBLE_DMS_GMS: 'limit_visible_dms_gms',
    SHOW_UNREAD_SECTION: 'show_unread_section',
    CATEGORY_ADVANCED_SETTINGS: 'advanced_settings',
    ADVANCED_FILTER_JOIN_LEAVE: 'join_leave',
    ADVANCED_CODE_BLOCK_ON_CTRL_ENTER: 'code_block_ctrl_enter',
    ADVANCED_SEND_ON_CTRL_ENTER: 'send_on_ctrl_enter',
    ADVANCED_SYNC_DRAFTS: 'sync_drafts',
    CATEGORY_WHATS_NEW_MODAL: 'whats_new_modal',
    HAS_SEEN_SIDEBAR_WHATS_NEW_MODAL: 'has_seen_sidebar_whats_new_modal',

    CATEGORY_PERFORMANCE_DEBUGGING: 'performance_debugging',
    NAME_DISABLE_CLIENT_PLUGINS: 'disable_client_plugins',
    NAME_DISABLE_TELEMETRY: 'disable_telemetry',
    NAME_DISABLE_TYPING_MESSAGES: 'disable_typing_messages',

    UNREAD_SCROLL_POSITION: 'unread_scroll_position',
    UNREAD_SCROLL_POSITION_START_FROM_LEFT: 'start_from_left_off',
    UNREAD_SCROLL_POSITION_START_FROM_NEWEST: 'start_from_newest',

    CATEGORY_UPGRADE_CLOUD: 'upgrade_cloud',
    SYSTEM_CONSOLE_LIMIT_REACHED: 'system_console_limit_reached',

    NEW_CHANNEL_WITH_BOARD_TOUR_SHOWED: 'channel_with_board_tip_showed',

    CATEGORY_ONBOARDING: 'category_onboarding',

    CATEGORY_DRAFTS: 'drafts',
    DRAFTS_TOUR_TIP_SHOWED: 'drafts_tour_tip_showed',

    CATEGORY_REPORTING: 'reporting',

    HIDE_BATCH_EXPORT_CONFIRM_MODAL: 'hide_batch_export_confirm_modal',
    HIDE_MYSQL_STATS_NOTIFICATION: 'hide_mysql_stats_notifcation',

    CATEGORY_THEME: 'theme',
    THEMES: {
        denim: {
            type: 'Denim',
            sidebarBg: '#1e325c',
            sidebarText: '#ffffff',
            sidebarUnreadText: '#ffffff',
            sidebarTextHoverBg: '#28427b',
            sidebarTextActiveBorder: '#5d89ea',
            sidebarTextActiveColor: '#ffffff',
            sidebarHeaderBg: '#192a4d',
            sidebarHeaderTextColor: '#ffffff',
            sidebarTeamBarBg: '#14213e',
            onlineIndicator: '#3db887',
            awayIndicator: '#ffbc1f',
            dndIndicator: '#d24b4e',
            mentionBg: '#ffffff',
            mentionBj: '#ffffff',
            mentionColor: '#1e325c',
            centerChannelBg: '#ffffff',
            centerChannelColor: '#3f4350',
            newMessageSeparator: '#cc8f00',
            linkColor: '#386fe5',
            buttonBg: '#1c58d9',
            buttonColor: '#ffffff',
            errorTextColor: '#d24b4e',
            mentionHighlightBg: '#ffd470',
            mentionHighlightLink: '#1b1d22',
            codeTheme: 'github',
        },
        sapphire: {
            type: 'Sapphire',
            sidebarBg: '#174ab5',
            sidebarText: '#ffffff',
            sidebarUnreadText: '#ffffff',
            sidebarTextHoverBg: '#2a58ba',
            sidebarTextActiveBorder: '#57b5f0',
            sidebarTextActiveColor: '#ffffff',
            sidebarHeaderBg: '#1542a2',
            sidebarHeaderTextColor: '#ffffff',
            sidebarTeamBarBg: '#133a91',
            onlineIndicator: '#3db887',
            awayIndicator: '#ffbc1f',
            dndIndicator: '#d24b4e',
            mentionBg: '#ffffff',
            mentionBj: '#ffffff',
            mentionColor: '#174ab5',
            centerChannelBg: '#ffffff',
            centerChannelColor: '#3f4350',
            newMessageSeparator: '#15b7b7',
            linkColor: '#1c58d9',
            buttonBg: '#1c58d9',
            buttonColor: '#ffffff',
            errorTextColor: '#d24b4e',
            mentionHighlightBg: '#7ff0f0',
            mentionHighlightLink: '#0d6e6e',
            codeTheme: 'github',
        },
        quartz: {
            type: 'Quartz',
            sidebarBg: '#F4F4F6',
            sidebarText: '#1D1F25',
            sidebarUnreadText: '#1D1F25',
            sidebarTextHoverBg: '#E8EAED',
            sidebarTextActiveBorder: '#32a4ec',
            sidebarTextActiveColor: '#1D1F25',
            sidebarHeaderBg: '#EEEFF2',
            sidebarHeaderTextColor: '#1D1F25',
            sidebarTeamBarBg: '#E8EAED',
            onlineIndicator: '#3db887',
            awayIndicator: '#f5ab07',
            dndIndicator: '#d24b4e',
            mentionBg: '#1c58d9',
            mentionBj: '#1c58d9',
            mentionColor: '#ffffff',
            centerChannelBg: '#ffffff',
            centerChannelColor: '#31343F',
            newMessageSeparator: '#15b7b7',
            linkColor: '#1c58d9',
            buttonBg: '#1c58d9',
            buttonColor: '#ffffff',
            errorTextColor: '#d24b4e',
            mentionHighlightBg: '#7ff0f0',
            mentionHighlightLink: '#0d6e6e',
            codeTheme: 'github',
        },
        indigo: {
            type: 'Indigo',
            sidebarBg: '#172136',
            sidebarText: '#ffffff',
            sidebarUnreadText: '#ffffff',
            sidebarTextHoverBg: '#222c3f',
            sidebarTextActiveBorder: '#4A7CE8',
            sidebarTextActiveColor: '#ffffff',
            sidebarHeaderBg: '#1A253D',
            sidebarHeaderTextColor: '#ffffff',
            sidebarTeamBarBg: '#1C2740',
            onlineIndicator: '#3db887',
            awayIndicator: '#f5ab00',
            dndIndicator: '#d24b4e',
            mentionBg: '#4A7CE8',
            mentionBj: '#4A7CE8',
            mentionColor: '#ffffff',
            centerChannelBg: '#121A2B',
            centerChannelColor: '#dddfe4',
            newMessageSeparator: '#81a3ef',
            linkColor: '#5D89EA',
            buttonBg: '#4A7CE8',
            buttonColor: '#ffffff',
            errorTextColor: '#d24b4e',
            mentionHighlightBg: '#133a91',
            mentionHighlightLink: '#a4f4f4',
            codeTheme: 'solarized-dark',
        },
        onyx: {
            type: 'Onyx',
            sidebarBg: '#202228',
            sidebarText: '#ffffff',
            sidebarUnreadText: '#ffffff',
            sidebarTextHoverBg: '#25262a',
            sidebarTextActiveBorder: '#4A7CE8',
            sidebarTextActiveColor: '#ffffff',
            sidebarHeaderBg: '#24272D',
            sidebarHeaderTextColor: '#ffffff',
            sidebarTeamBarBg: '#292C33',
            onlineIndicator: '#3db887',
            awayIndicator: '#f5ab00',
            dndIndicator: '#d24b4e',
            mentionBg: '#4B7CE7',
            mentionBj: '#4B7CE7',
            mentionColor: '#ffffff',
            centerChannelBg: '#191B1F',
            centerChannelColor: '#E3E4E8',
            newMessageSeparator: '#1adbdb',
            linkColor: '#5D89EA',
            buttonBg: '#4A7CE8',
            buttonColor: '#ffffff',
            errorTextColor: '#da6c6e',
            mentionHighlightBg: '#0d6e6e',
            mentionHighlightLink: '#a4f4f4',
            codeTheme: 'monokai',
        },
    } as Record<ThemeKey, Theme>,
    RECENT_EMOJIS: 'recent_emojis',
};

export default Preferences;
