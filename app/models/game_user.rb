# == Schema Information
#
# Table name: game_users
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  game_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_game_users_on_game_id  (game_id)
#  index_game_users_on_user_id  (user_id)
#

class GameUser < ActiveRecord::Base
  belongs_to :user
  belongs_to :game

  validates :user, :game, presence: true
end
