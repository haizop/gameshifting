# == Schema Information
#
# Table name: game_states
#
#  id         :integer          not null, primary key
#  game_id    :integer
#  setup      :jsonb            not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_game_states_on_game_id  (game_id)
#  index_game_states_on_setup    (setup)
#

FactoryGirl.define do
  factory :game_state do
    association :game
    setup "{\"panels\":[{\"id\":1,\"placement\":{\"row\":1,\"order\":1},\"name\":\"Body\",\"description\":\"body position\",\"dynamics\":[{\"id\":1,\"order\":3,\"name\":\"sitting\",\"description\":\"on the ground\"},{\"id\":2,\"order\":1,\"name\":\"standing\",\"description\":\"on your feet\"},{\"id\":3,\"order\":2,\"name\":\"dancing\",\"description\":\"across the room\"}]},{\"id\":2,\"placement\":{\"row\":1,\"order\":2},\"name\":\"Speaking\",\"description\":\"how we manage who speaks now\",\"dynamics\":[{\"id\":1,\"order\":3,\"name\":\"circle\",\"description\":\"one at a time\"},{\"id\":2,\"order\":2,\"name\":\"jump-in\",\"description\":\"joyful chaos\"},{\"id\":3,\"order\":1,\"name\":\"stack\",\"description\":\"stack keeper makes list\"}]}]}"
  end

end
