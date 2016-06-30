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

require 'rails_helper'

RSpec.describe GameState, type: :model do
  it "has a valid factory" do
    expect(build(:setup)).to be_valid
  end

  describe 'association' do
    it { should belong_to(:game) }
  end

  describe 'validation' do
    it { should validate_presence_of(:game)}
    it { should validate_presence_of(:current_state)}
  end
end
