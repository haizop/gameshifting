# == Schema Information
#
# Table name: game_shifts
#
#  id         :integer          not null, primary key
#  game_id    :integer
#  game_set   :json
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_game_shifts_on_game_id  (game_id)
#

FactoryGirl.define do
  factory :game_shift do
    association :game
  end

end
