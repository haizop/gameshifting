# == Schema Information
#
# Table name: game_shifts
#
#  id         :integer          not null, primary key
#  game_id    :integer
#  game_state :jsonb            not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_game_shifts_on_game_id     (game_id)
#  index_game_shifts_on_game_state  (game_state)
#

FactoryGirl.define do
  factory :game_shift do
    association :game
    game_state {{ 'dynamic_1' => 'test dynamic' }}
  end

end
