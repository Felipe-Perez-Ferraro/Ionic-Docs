export interface OSResponse {
  total_count: number;
  offset: number;
  limit: number;
  notifications: Notification[];
}

export interface Notification {
  adm_big_picture: null;
  adm_group: null;
  adm_group_message: null;
  adm_large_icon: null;
  adm_small_icon: null;
  adm_sound: null;
  spoken_text: null;
  alexa_ssml: null;
  alexa_display_title: null;
  amazon_background_data: null;
  android_accent_color: null;
  android_group: null;
  android_group_message: null;
  android_led_color: null;
  android_sound: null;
  android_visibility: number;
  app_id: string;
  big_picture: null;
  buttons: null;
  canceled: boolean;
  chrome_big_picture: null;
  chrome_icon: null;
  chrome_web_icon: null;
  chrome_web_image: null;
  chrome_web_badge: null;
  content_available: null;
  contents: Contents;
  converted: number;
  data: ApnsAlert;
  delayed_option: null;
  delivery_time_of_day: null;
  errored: number;
  excluded_segments: any[];
  failed: number;
  firefox_icon: null;
  global_image: null;
  headings: Contents;
  id: string;
  include_player_ids: null;
  include_external_user_ids: null;
  include_aliases: null;
  included_segments: string[];
  thread_id: null;
  ios_badgeCount: null;
  ios_badgeType: null;
  ios_category: null;
  ios_interruption_level: null;
  ios_relevance_score: null;
  ios_sound: null;
  apns_alert: ApnsAlert;
  target_content_identifier: null;
  isAdm: boolean;
  isAndroid: boolean;
  isChrome: boolean;
  isChromeWeb: boolean;
  isAlexa: null;
  isFirefox: boolean;
  isIos: boolean;
  isSafari: boolean;
  isWP: boolean;
  isWP_WNS: boolean;
  isEdge: boolean;
  isHuawei: boolean;
  isSMS: boolean;
  large_icon: null;
  priority: number;
  queued_at: number;
  remaining: number;
  send_after: number;
  completed_at: number;
  small_icon: null;
  successful: number;
  received: null;
  tags: null;
  filters: null;
  template_id: null;
  ttl: number;
  url: null;
  web_url: null;
  app_url: null;
  web_buttons: null;
  web_push_topic: null;
  wp_sound: null;
  wp_wns_sound: null;
  platform_delivery_stats: PlatformDeliveryStats;
  ios_attachments: null;
  huawei_sound: null;
  huawei_led_color: null;
  huawei_accent_color: null;
  huawei_visibility: string;
  huawei_group: null;
  huawei_group_message: null;
  huawei_channel_id: null;
  huawei_existing_channel_id: null;
  huawei_small_icon: null;
  huawei_large_icon: null;
  huawei_big_picture: null;
  huawei_msg_type: null;
  throttle_rate_per_minute: null;
  fcap_group_ids: null;
  fcap_status: string;
  sms_from: null;
  sms_media_urls: null;
  subtitle: null;
  name: string;
  email_click_tracking_disabled: null;
  isEmail: boolean;
  email_subject: null;
  email_from_name: null;
  email_from_address: null;
  email_preheader: null;
  email_reply_to_address: null;
  include_unsubscribed: boolean;
  huawei_category: null;
  huawei_bi_tag: null;
}

export interface ApnsAlert {}

export interface Contents {
  en: string;
}

export interface PlatformDeliveryStats {
  android: Android;
}

export interface Android {
  successful: number;
  converted: number;
  received: number;
  failed: number;
  errored: number;
  suppressed?: number;
}
