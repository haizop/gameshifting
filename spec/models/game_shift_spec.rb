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

require 'rails_helper'

RSpec.describe GameShift, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
