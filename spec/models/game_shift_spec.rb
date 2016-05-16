# == Schema Information
#
# Table name: game_shifts
#
#  id              :integer          not null, primary key
#  game_session_id :integer
#  current_game    :json
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'rails_helper'

RSpec.describe GameShift, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
