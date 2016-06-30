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

ActiveRecord::Schema.define(version: 20160629173059) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "board_panels", force: :cascade do |t|
    t.integer  "board_id"
    t.integer  "panel_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "board_panels", ["board_id"], name: "index_board_panels_on_board_id", using: :btree
  add_index "board_panels", ["panel_id"], name: "index_board_panels_on_panel_id", using: :btree

  create_table "boards", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.json     "default_setup"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  create_table "dynamics", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "game_states", force: :cascade do |t|
    t.integer  "game_id"
    t.jsonb    "state",      default: {}, null: false
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
  end

  add_index "game_states", ["game_id"], name: "index_game_states_on_game_id", using: :btree
  add_index "game_states", ["state"], name: "index_game_states_on_state", using: :gin

  create_table "game_users", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "game_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "game_users", ["game_id"], name: "index_game_users_on_game_id", using: :btree
  add_index "game_users", ["user_id"], name: "index_game_users_on_user_id", using: :btree

  create_table "games", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.integer  "activated_dynamics",              array: true
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
  end

  create_table "panel_dynamics", force: :cascade do |t|
    t.integer  "panel_id"
    t.integer  "dynamic_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "panel_dynamics", ["dynamic_id"], name: "index_panel_dynamics_on_dynamic_id", using: :btree
  add_index "panel_dynamics", ["panel_id"], name: "index_panel_dynamics_on_panel_id", using: :btree

  create_table "panels", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.json     "default_setup"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
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
