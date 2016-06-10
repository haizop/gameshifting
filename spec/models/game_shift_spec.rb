# == Schema Information
#
# Table name: game_shifts
#
#  id         :integer          not null, primary key
#  game_id    :integer
#  game_state :jsonb
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_game_shifts_on_game_id  (game_id)
#

require 'rails_helper'

RSpec.describe GameShift, type: :model do
  it "has a valid factory" do
    expect(build(:game_shift)).to be_valid
  end

  describe 'association' do
    it { should belong_to(:game) }
  end
end
