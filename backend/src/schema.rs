// @generated automatically by Diesel CLI.

diesel::table! {
    m_admin_users (id) {
        id -> Bigint,
        #[max_length = 255]
        username -> Nullable<Varchar>,
        created_at -> Datetime,
        updated_at -> Datetime,
        updater_id -> Bigint,
        deleted_f -> Bool,
    }
}

diesel::table! {
    t_admin_user_emails (id) {
        id -> Bigint,
        admin_user_id -> Bigint,
        #[max_length = 255]
        email -> Varchar,
        valid_f -> Nullable<Bool>,
        created_at -> Datetime,
        updated_at -> Datetime,
        updater_id -> Bigint,
        deleted_f -> Bool,
    }
}

diesel::table! {
    t_admin_user_login_histories (id) {
        id -> Bigint,
        admin_user_id -> Bigint,
        last_login_at -> Nullable<Datetime>,
        created_at -> Datetime,
        updated_at -> Datetime,
        updater_id -> Bigint,
        deleted_f -> Bool,
    }
}

diesel::table! {
    t_admin_user_oauth_tokens (id) {
        id -> Bigint,
        admin_user_id -> Bigint,
        access_token -> Text,
        refresh_token -> Text,
        access_token_expires_at -> Nullable<Datetime>,
        refresh_token_expires_at -> Nullable<Datetime>,
        created_at -> Datetime,
        updated_at -> Datetime,
        updater_id -> Bigint,
        deleted_f -> Bool,
    }
}

diesel::table! {
    t_admin_user_passwords (id) {
        id -> Bigint,
        admin_user_id -> Bigint,
        #[max_length = 255]
        password -> Varchar,
        valid_f -> Nullable<Bool>,
        created_at -> Datetime,
        updated_at -> Datetime,
        updater_id -> Bigint,
        deleted_f -> Bool,
    }
}

diesel::allow_tables_to_appear_in_same_query!(
    m_admin_users,
    t_admin_user_emails,
    t_admin_user_login_histories,
    t_admin_user_oauth_tokens,
    t_admin_user_passwords,
);
