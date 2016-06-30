# == Schema Information
#
# Table name: game_states
#
#  id         :integer          not null, primary key
#  game_id    :integer
#  state      :jsonb            not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_game_states_on_game_id  (game_id)
#  index_game_states_on_state    (state)
#

class GameState < ActiveRecord::Base
  belongs_to :game

  validates :game, :state, presence: true
end
