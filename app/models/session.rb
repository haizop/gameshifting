class Session < ActiveRecord::Base
  has_many :users, through: :session_roles
  has_many :game_shifts
end
