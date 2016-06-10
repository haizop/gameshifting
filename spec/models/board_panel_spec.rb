# == Schema Information
#
# Table name: board_panels
#
#  id         :integer          not null, primary key
#  board_id   :integer
#  panel_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_board_panels_on_board_id  (board_id)
#  index_board_panels_on_panel_id  (panel_id)
#

require 'rails_helper'

RSpec.describe BoardPanel, type: :model do
  it "has a valid factory" do
    expect(build(:board_panel)).to be_valid
  end

  describe  'validation' do
    it { should validate_presence_of(:board) }
    it { should validate_presence_of(:panel) }
  end

  describe 'association' do
    it { should belong_to(:board) }
    it { should belong_to(:panel) }
  end
end
