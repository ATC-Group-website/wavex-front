    users:
        - id                     primary key                             not null
        - first_name             string                                  not null   
        - last_name              string                                  not null
        - email                  string('uniquq')                        not null   
        - phone                  string('uniquq')                        nullable   
        - date_of_birth          date                                    nullable   
        - gender                 enum('male', 'female', 'other')         not null   
        - medical_conditions     text                                    nullable
        - email_verified_at      date                                    nullable 
        - password               string                                  not null   
        - image                  string                                  nullable   
        - is_active              boolean                                 not null  -- default: true 
        - is_admin               boolean                                 not null  -- default: false 
        - device_token           string                                  not null  -- Used For Push Notifications 
        - created_at             timestamp                               nullable
        - updated_at             timestamp                               nullable

    --------------------------------------------------------------------------------------------

    settings:
        - id                 primary key                             not null
        - key                string                                  not null
        - value              string                                  nullable
        - page               string                                  not null       default: general
        - type               enum('text', 'media')                   not null       default: text  
        - created_at         timestamp                               nullable
        - updated_at         timestamp                               nullable

    --------------------------------------------------------------------------------------------

    inquiries:
        - id                     primary key                             not null
        - name                   string                                  not null
        - email                  string                                  not null
        - phone                  string                                  not null
        - country                string                                  not null
        - message                string                                  nullable
        - created_at             timestamp                               nullable
        - updated_at             timestamp                               nullable

    --------------------------------------------------------------------------------------------

    email_notifications:
        - id                     primary key                             not null
        - type                   string                                  not null   example:inquiry,contact-us,metting,etc...
        - email                  string                                  not null
        - created_at             timestamp                               nullable
        - updated_at             timestamp                               nullable

    --------------------------------------------------------------------------------------------

    programs:
        - id                primary key                             not null
        - name              string                                  not null   
        - subtitle          string                                  not null  -- e.g., 'Suits all levels', 'Ladies only'
        - description       text                                    not null
        - main_image        string                                  not null
        - cover_image       string                                  not null
        - is_active         boolean                                 not null -- default: true
        - sort_order        int                                     not null -- default: 0
        - created_at        timestamp                               nullable
        - updated_at        timestamp                               nullable

    --------------------------------------------------------------------------------------------

    locations:
        - id                primary key                             not null
        - area_name         string                                  not null   -- e.g., 'Zayed', 'New Cairo', 'Sahel'
        - venue_name        string                                  not null   -- e.g., 'NewGiza Sports Club', 'LA7 Aeon'
        - full_address      string                                  nullable   -- Complete address
        - longitude         string                                  nullable
        - latitude          string                                  nullable
        - phone             string                                  nullable   -- Venue contact
        - is_active         boolean                                 not null   -- default: true
        - created_at        timestamp                               nullable
        - updated_at        timestamp                               nullable

    --------------------------------------------------------------------------------------------

    sessions:
        - id               primary key                                  not null
        - program_id       foreign key                                  not null   
        - location_id      foreign key                                  not null   
        - session_date     date                                         not null     
        - start_time       time                                         not null   
        - end_time         time                                         not null   
        - max_capacity     int                                          not null   -- Maximum participants
        - current_bookings int                                          not null   -- Current number of bookings
        - status           enum('scheduled', 'cancelled', 'completed')  not null   -- default: scheduled
        - created_at       timestamp                               nullable
        - updated_at       timestamp                               nullable

    --------------------------------------------------------------------------------------------

    packages:
        - id                     primary key                        not null
        - name                   string                             not null   
        - description            text                               not null   
        - sessions_included      int                                not null   
        - price                  float                              not null   
        - validity_days          int                                nullable -- (NULL for no expiry)
        - is_active              boolean                            not null -- default: true
        - price                  float                              not null   
        - sort_order             int                                not null -- default: 0
        - created_at             timestamp                          nullable
        - updated_at             timestamp                          nullable

    --------------------------------------------------------------------------------------------

    user_packages:
        - id                     primary key                                  not null
        - user_id                foreign key                                  not null   
        - package_id             foreign key                                  not null   
        - purchase_date          timestamp                                    not null   
        - sessions_included      int                                          not null   
        - sessions_remaining     int                                          not null  -- Decreases with each booking
        - expires_at             timestamp                                    not null  -- (NULL for no expiry date)
        - payment_status         enum('pending', 'paid', 'refunded','failed') not null  -- default: 'pending'
        - payment_amount         float                                        not null  -- user paid amount
        - payment_method         string                                       not null  -- 'credit_card', 'cash', 'bank_transfer', etc
        - transaction_reference  string                                       not null  -- Payment gateway transaction ID
        - status     enum('active', 'expired', 'used_up', 'refunded')         not null  -- default: 'pending'                     
        - created_at             timestamp                                    nullable
        - updated_at             timestamp                                    nullable

--------------------------------------------------------------------------------------------

bookings:
    - id                     primary key                                           not null
    - user_id                foreign key                                           not null   
    - session_id             foreign key                                           not null   
    - user_package_id        foreign key                                           not null -- Which package session was used from
    - booking_reference      string('unique')                                      not null  
    - booking_status         enum('confirmed','cancelled','completed','no_show')   not null -- default: 'confirmed'  
    - booking_date           timestamp                                             not null  
    - cancelled_at           string                                                not null -- When booking was cancelled 
    - cancellation_reason    string                                                not null -- Reason for cancellation
    - created_at             timestamp                                             nullable
    - updated_at             timestamp                                             nullable

--------------------------------------------------------------------------------------------

instructors:
    - id                     primary key                             not null
    - first_name             string                                  not null   
    - last_name              string                                  not null
    - email                  string('uniquq')                        not null   
    - phone                  string('uniquq')                        not null   
    - bio                    text                                    nullable   
    - image                  string                                  nullable   
    - specializations        json                                    nullable  -- Programs they can teach
    - is_active              boolean                                 not null  -- default: true 
    - created_at             timestamp                               nullable
    - updated_at             timestamp                               nullable

--------------------------------------------------------------------------------------------

newsletters:
    - id                     primary key                             not null
    - email                  string('uniquq')                        not null  
    - created_at             timestamp                               nullable
    - updated_at             timestamp                               nullable

--------------------------------------------------------------------------------------------

notifications:
    - id                     primary key                             not null
    - user_id                foreign key                             not null   
    - title                  string                                  not null   default: WaxeX
    - description            string                                  not null   
    - redirect_type          enum('inside', 'outside')               nullable   
    - redirect_to            string                                  nullable   example: program:10, https://www.link.com 
    - read_at                timestamp                               not null   
    - created_at             timestamp                               nullable
    - updated_at             timestamp                               nullable

--------------------------------------------------------------------------------------------

categories:
    - id                     primary key                             not null
    - name                   string                                  not null   
    - description            string                                  not null   
    - sort_order             int                                     not null -- default: 0
    - slug                   string('uniquq')                        not null   
    - created_at             timestamp                               nullable
    - updated_at             timestamp                               nullable

--------------------------------------------------------------------------------------------

products:
    - id                     primary key                             not null
    - name                   string                                  not null   
    - description            text                                    not null   
    - price                  float                                   not null   
    - stock_quantity         int                                     not null -- default: 0
    - is_active              boolean                                 not null -- default: true 
    - dimensions             json                                    nullable -- length, width, height 
    - slug                   string('uniquq')                        not null   
    - created_at             timestamp                               nullable
    - updated_at             timestamp                               nullable

--------------------------------------------------------------------------------------------

orders:
    - id                     uuid                                    not null
    - user_id                foreign key                             nullable   
    - status                 enum                                    not null   
    - cost                   float                                   nullable   
    - shipping_fees          int                                     nullable   
    - total                  float                                   nullable   
    - payment_method         enum                                    not null  -- 'cash_on_delivery', 'visa'
    - payment_status         enum                                    not null  -- 'pending', 'paid', 'failed', 'refunded'
    - transaction_reference  string                                  not null  --  Payment gateway transaction ID
    - address_id             foreign key                             nullable   
    - bought_at              timestamp                               nullable   
    - shipped_at             timestamp                               nullable
    - delivered_at           timestamp                               nullable
    - cancelled_at           timestamp                               nullable   
    - deleted_by             foreign key                             nullable   
    - notes                  text                                    nullable -- Additional notes   
    - deleted_at             timestamp                               nullable   
    - created_at             timestamp                               nullable
    - updated_at             timestamp                               nullable
Status values : 'cart',    'processing', 'shipped', 'on_the_way', 'delivered', 'cancelled','pending_return', 'returned'

--------------------------------------------------------------------------------------------

address:
    - id                     primary key                             not null
    - user_id                foreign key                             not null   
    - name                   string                                  not null   
    - email                  string                                  nullable   
    - phone                  string                                  not null   
    - address                text                                    not null   
    - governorate            int                                     nullable   
    - city                   int                                     nullable   
    - apartment              int                                     nullable   
    - postal_code            int                                     nullable   
    - created_at             timestamp                               nullable
    - updated_at             timestamp                               nullable

--------------------------------------------------------------------------------------------

shopping_carts:
    - id                     primary key                             not null
    - user_id                foreign key                             not null   
    - order_id               foreign key                             not null   
    - product_id             foreign key                             not null   
    - quantity               int                                     not null   
    - price                  float                                   not null   
    - created_at             timestamp                               nullable
    - updated_at             timestamp                               nullable

--------------------------------------------------------------------------------------------
