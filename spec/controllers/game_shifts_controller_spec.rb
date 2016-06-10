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

require 'rails_helper'

RSpec.describe GameShiftsController, type: :controller do

end
