# == Schema Information
#
# Table name: board_states
#
#  id         :integer          not null, primary key
#  game_id    :integer
#  setup      :jsonb            not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_board_states_on_game_id  (game_id)
#  index_board_states_on_setup    (setup)
#

FactoryGirl.define do
  factory :board_state do
    association :game
    setup {{ 'dynamic_1' => 'test dynamic' }}
  end

end
