# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160516211505) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "canvasses", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.json     "default_gameset"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  create_table "game_shifts", force: :cascade do |t|
    t.integer  "session_id"
    t.json     "current_gameset"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "game_shifts", ["session_id"], name: "index_game_shifts_on_session_id", using: :btree

  create_table "panels", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.json     "default_gameset"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  create_table "session_users", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "session_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "session_users", ["session_id"], name: "index_session_users_on_session_id", using: :btree
  add_index "session_users", ["user_id"], name: "index_session_users_on_user_id", using: :btree

  create_table "sessions", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "settings", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.integer  "panel_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "settings", ["panel_id"], name: "index_settings_on_panel_id", using: :btree

  create_table "todos", force: :cascade do |t|
    t.text     "note",                       null: false
    t.boolean  "completed",  default: false, null: false
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

end
