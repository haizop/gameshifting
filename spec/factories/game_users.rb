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

FactoryGirl.define do
  factory :game_user do
    association :game
    association :user
  end

end
